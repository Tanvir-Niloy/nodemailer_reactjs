const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const sendGridTransporter = require("nodemailer-sendgrid-transport");
const bodyParser = require("body-parser");

require("dotenv").config();

const port = process.env.PORT || 7000;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//nodemailer

const transporter = nodemailer.createTransport(
  sendGridTransporter({
    auth: {
      api_key: process.env.API_KEY,
    },
  })
);

app.post("/sendmail", (req, res) => {
  const { name, email, jobtypes, message } = req.body;

  if (!name) {
    res.status(400).json({ error: "Pleace provide your name" });
  }
  if (!email) {
    res.status(400).json({ error: "Pleace provide your Email" });
  }
  if (!jobtypes) {
    res.status(400).json({ error: "Pleace provide a jobtype" });
  }
  if (!message) {
    res.status(400).json({ error: "Message field is required!" });
  }

  transporter.sendMail({
    to: "tanvirniloy428@gmail.com",
    from: "tanvirniloy428@gmail.com",
    subject: "Job offer",
    html: `
            
            <h5>Details Information :</h5>
            <ul>
            <li><p>Name: ${name}</p></li>
            <li><p>Email: ${email}</p></li>
            <li><p>JobTypes: ${jobtypes}</p></li>
            <li><p>Message: ${message}</p></li>
            </ul>
        `,
  });
  res.json({message:"your email has been sent successfully!"});
});

app.listen(port, console.log(`api is running on port ${port}`));
