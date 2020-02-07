var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')

/* GET home page. */
router.post('/sendmail', async function(req, res) {

    console.log(req.body)

  let transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    // auth: {
    //   user: "5be92a925bcb70",
    //   pass: "a929dae2c8daee"
    // }
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.input1 || " <foo@example.com>", // sender address
    to: req.body.input2 || " baz@example.com", // list of receivers
    subject: req.body.input3, // Subject line
    text: req.body.input4 // plain text body
    // html: "<b>Hello woasdasrld?</b>" // html body
  });

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.end();
});

module.exports = router;
