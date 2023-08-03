const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

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
