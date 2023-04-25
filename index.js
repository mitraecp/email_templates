const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/sendMail", function (_req, resp) {
  resp.header("Access-Control-Allow-Origin", "*");

  fs.readFile("./invite/index.html", "utf8", function (err, data) {
    if (err) throw err;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "mitra.industria.dev@gmail.com",
        pass: "porqvzmvkqrmkarp",
      },
    });

    transporter
      .sendMail({
        from: "mitraecp@gmail.com",
        to: "mitra.industria.dev@gmail.com",
        subject: `teste sender`,
        html: data,
      })
      .then(() => {
        resp.end(`Email sended`);
      })
      .catch(console.error);
  });
});

app.listen(8080);
