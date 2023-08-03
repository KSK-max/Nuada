const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();




// const mongoose = require("mongoose");
// const app2 = express();
// app2.use(express.json());
// const cors = require("cors");
// app2.use(cors(
//   {
//       origin: ["https://nuada-frontend-nm6xpq3ex-ksk-max.vercel.app"],
//       methods: ["POST", "GET"],
//       credentials: true

//   }
// ));
// const bcrypt = require("bcryptjs");
// const { publicDecrypt } = require("crypto");
// const { resolve } = require("path");
// var http = require('http');
// // Replace if using a different env file or config
// const env = require("dotenv").config({ path: "./.env" });

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-08-01",
// });


// app2.use(express.static(process.env.STATIC_DIR));

// app2.get("/", (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + "/home.jsx");
//   res.sendFile(path);
// });

// app2.get("/config", (req, res) => {
//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });
// });

// app2.post("/create-payment-intent", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       currency: "EUR",
//       amount: 1999,
//       automatic_payment_methods: { enabled: true },
//     });

//     // Send publishable key and PaymentIntent details to client
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (e) {
//     return res.status(400).send({
//       error: {
//         message: e.message,
//       },
//     });
//   }
// });




// app2.listen(5252, () =>
//   console.log(`Node server listening at http://localhost:5252`)
// );



// CORS middleware to allow requests from any origin
app.use(cors());

// Body Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(6001, () => console.log("Email service running on port 6001"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "alanandvivo@gmail.com",
    pass: "hbhjhfdrxziriuui",
  },
});

app.get("/", (req, res) => {
  res.json({ msg: 'This is CORS-enabled for a Single Route' });
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
