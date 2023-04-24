const fs = require("fs");
const nodemailer = require("nodemailer");

function sendMail() {
    debugger
  fs.readFile("./invite/index.html", "utf8", function (err, data) {
    if (err) throw err;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mitra.industria.dev@gmail.com",
        pass: process.env.MAIL_KEY,
      },
    });

    let mailOptions = {
      from: "mitra.industria.dev@gmail.com",
      to: "danillo@mitraecp.com",
      subject: "teste sender",
      html: data,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
  });
}
