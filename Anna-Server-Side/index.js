const express = require("express");
const nodemailer = require("nodemailer")
const cors = require("cors");
const app3 = express();
const corsOptions = {
  origin: "*",
  methods: ["POST", "GET"],
  credentials: true,
};
app3.use(cors({corsOptions}));

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




app3.use(express.urlencoded({ extended: true }));


// CORS middleware to allow requests from any origin
app3.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // You can restrict this to specific origins if needed.
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Handle OPTIONS requests for preflight
app3.options("*", (req, res) => {
  // Set the allowed methods, headers, and other relevant CORS headers
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200); // Respond with a 200 status for preflight requests
});


app3.listen(6001, () => console.log("Email service running on port 6001"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "alanandvivo@gmail.com",
    pass: "hbhjhfdrxziriuui",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app3.get("/", cors(), (req, res) => {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
  })

app3.post("/contact", cors(), (req, res) => {
  const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const fraudType = req.body.fraudType;
    const transferAmount = req.body.transferAmount;
    const transferDate = req.body.transferDate;
    const companyName = req.body.companyName;
    const suspectReason = req.body.suspectReason;
    const evidence = req.body.evidence;
    //const message = req.body.message; 
    const mail = {
      from: email,
    to: "alabraha@tcd.ie",
    subject: "Contact Form Submission",
    html: `<p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p>
    <p>phoneNumber: ${phoneNumber}</p>
    <p>fraudType: ${fraudType}</p>
    <p>transferAmount: ${transferAmount}</p>
    <p>transferDate: ${transferDate}</p>
    <p>companyName: ${companyName}</p>
    <p>suspectReason: ${suspectReason}</p>
    <p>Evidence: ${evidence}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});