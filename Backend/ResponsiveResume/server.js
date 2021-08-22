const express = require("express");
const app = express();
const path = require('path')
require("dotenv").config();

// const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5003;

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));