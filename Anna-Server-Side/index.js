const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
	apiVersion: "2022-08-01",
});

require("./models/userDetails");
require("./models/imageDetails");

// CORS middleware to allow requests from any origin
app.use(
	cors({
		origin: "*",
	})
);

// Body Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(6001, () => console.log("Email service running on port 6001"));

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connected to database");
	})
	.catch((e) => console.log(e));

const contactEmail = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "alanandvivo@gmail.com",
		pass: "hbhjhfdrxziriuui",
	},
});

app.get("/", (req, res) => {
	res.json({ msg: "This is CORS-enabled for a Single Route" });
});

app.post("/contact", (req, res) => {
	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		fraudType,
		transferAmount,
		transferDate,
		companyName,
		suspectReason,
		evidence,
	} = req.body;

	const mail = {
		from: email,
		to: "alabraha@tcd.ie",
		subject: "Contact Form Submission",
		html: `<p>First Name: ${firstName}</p>
           <p>Last Name: ${lastName}</p>
           <p>Email: ${email}</p>
           <p>PhoneNumber: ${phoneNumber}</p>
           <p>Fraud Type: ${fraudType}</p>
           <p>Transfer Amount: ${transferAmount}</p>
           <p>Transfer Date: ${transferDate}</p>
           <p>Company Name: ${companyName}</p>
           <p>Suspect Reason: ${suspectReason}</p>
           <p>Evidence: ${evidence}</p>`,
	};

	contactEmail.sendMail(mail, (error) => {
		if (error) {
			console.error("Error sending email:", error);
			res.status(500).json({ status: "ERROR" });
		} else {
			console.log("Email sent successfully!");
			res.json({ status: "Message Sent" });
		}
	});
});

app.get("/config", (req, res) => {
	res.send({
		publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	});
});

// PAYMENT

app.post("/create-payment-intent", async (req, res) => {
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			currency: "EUR",
			amount: 1999,
			automatic_payment_methods: { enabled: true },
		});

		// Send publishable key and PaymentIntent details to client
		res.send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (e) {
		return res.status(400).send({
			error: {
				message: e.message,
			},
		});
	}
});

app.post("/create-checkout-session", async (req, res) => {
	const { body } = req;
	const checkoutConfig = {
		payment_method_types: ["card"],
		line_items: body,
		mode: "payment",
		success_url: `https://nuada-frontend.vercel.app/success`,
		cancel_url: `https://nuada-frontend.vercel.app`,
	};

	try {
		const session = await stripe.checkout.sessions.create(checkoutConfig);

		res.json({ url: session.url });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

// USER AUTH

const User = mongoose.model("UserInfo");
const Images = mongoose.model("ImageDetails");
app.post("/register", async (req, res) => {
	const { fname, lname, email, password, userType } = req.body;

	const encryptedPassword = await bcrypt.hash(password, 10);
	try {
		const oldUser = await User.findOne({ email });

		if (oldUser) {
			return res.json({ error: "User Exists" });
		}
		await User.create({
			fname,
			lname,
			email,
			password: encryptedPassword,
			userType,
		});
		res.send({ status: "ok" });
	} catch (error) {
		res.send({ status: "error" });
	}
});

app.post("/login-user", async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) {
		return res.json({ error: "User Not found" });
	}
	if (await bcrypt.compare(password, user.password)) {
		const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
			expiresIn: "15m",
		});

		if (res.status(201)) {
			return res.json({ status: "ok", data: token });
		} else {
			return res.json({ error: "error" });
		}
	}
	res.json({ status: "error", error: "InvAlid Password" });
});

app.post("/userData", async (req, res) => {
	const { token } = req.body;
	try {
		const user = jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
			if (err) {
				return "token expired";
			}
			return res;
		});
		console.log(user);
		if (user == "token expired") {
			return res.send({ status: "error", data: "token expired" });
		}

		const useremail = user.email;
		User.findOne({ email: useremail })
			.then((data) => {
				res.send({ status: "ok", data: data });
			})
			.catch((error) => {
				res.send({ status: "error", data: error });
			});
	} catch (error) {}
});

app.post("/forgot-password", async (req, res) => {
	const { email } = req.body;
	try {
		const oldUser = await User.findOne({ email });
		if (!oldUser) {
			return res.json({ status: "User Not Exists!!" });
		}
		const secret = process.env.JWT_SECRET + oldUser.password;
		const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
			expiresIn: "5m",
		});
		const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
		var transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "adarsh438tcsckandivali@gmail.com",
				pass: "rmdklolcsmswvyfw",
			},
		});

		var mailOptions = {
			from: "youremail@gmail.com",
			to: "thedebugarena@gmail.com",
			subject: "Password Reset",
			text: link,
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});
		console.log(link);
	} catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
	const { id, token } = req.params;
	console.log(req.params);
	const oldUser = await User.findOne({ _id: id });
	if (!oldUser) {
		return res.json({ status: "User Not Exists!!" });
	}
	const secret = process.env.JWT_SECRET + oldUser.password;
	try {
		const verify = jwt.verify(token, secret);
		res.render("index", { email: verify.email, status: "Not Verified" });
	} catch (error) {
		console.log(error);
		res.send("Not Verified");
	}
});

app.post("/reset-password/:id/:token", async (req, res) => {
	const { id, token } = req.params;
	const { password } = req.body;

	const oldUser = await User.findOne({ _id: id });
	if (!oldUser) {
		return res.json({ status: "User Not Exists!!" });
	}
	const secret = process.env.JWT_SECRET + oldUser.password;
	try {
		const verify = jwt.verify(token, secret);
		const encryptedPassword = await bcrypt.hash(password, 10);
		await User.updateOne(
			{
				_id: id,
			},
			{
				$set: {
					password: encryptedPassword,
				},
			}
		);

		res.render("index", { email: verify.email, status: "verified" });
	} catch (error) {
		console.log(error);
		res.json({ status: "Something Went Wrong" });
	}
});

app.get("/getAllUser", async (req, res) => {
	try {
		const allUser = await User.find({});
		res.send({ status: "ok", data: allUser });
	} catch (error) {
		console.log(error);
	}
});

app.post("/deleteUser", async (req, res) => {
	const { userid } = req.body;
	try {
		User.deleteOne({ _id: userid }, function (err, res) {
			console.log(err);
		});
		res.send({ status: "Ok", data: "Deleted" });
	} catch (error) {
		console.log(error);
	}
});

app.post("/upload-image", async (req, res) => {
	const { base64 } = req.body;
	try {
		await Images.create({ image: base64 });
		res.send({ Status: "ok" });
	} catch (error) {
		res.send({ Status: "error", data: error });
	}
});

app.get("/get-image", async (req, res) => {
	try {
		await Images.find({}).then((data) => {
			res.send({ status: "ok", data: data });
		});
	} catch (error) {}
});

app.get("/paginatedUsers", async (req, res) => {
	const allUser = await User.find({});
	const page = parseInt(req.query.page);
	const limit = parseInt(req.query.limit);

	const startIndex = (page - 1) * limit;
	const lastIndex = page * limit;

	const results = {};
	results.totalUser = allUser.length;
	results.pageCount = Math.ceil(allUser.length / limit);

	if (lastIndex < allUser.length) {
		results.next = {
			page: page + 1,
		};
	}
	if (startIndex > 0) {
		results.prev = {
			page: page - 1,
		};
	}
	results.result = allUser.slice(startIndex, lastIndex);
	res.json(results);
});
