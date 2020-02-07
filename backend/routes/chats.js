var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.post("/sendchat", async function(req, res) {
  //REAL TIME INSERT DATA
  const ws = new WebSocket("ws:/localhost:8000");

  ws.on("open", function open() {
    const data = JSON.stringify({
      from: req.body.from,
      to: req.body.to,
      private: req.body.private,
      message: req.body.message
    });
    ws.send(data);
  });

//   const result = await Log.create({
//     from: req.body.from,
//     to: req.body.to,
//     message: req.body.message,
//     created_at: new Date(),
//     updated_at: new Date()
//   });
//   // console.log(result)
//   res.json(result);

  res.end();
});

module.exports = router;
