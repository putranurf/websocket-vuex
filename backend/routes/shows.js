var express = require("express");
var router = express.Router();
const WebSocket = require("ws");

// const Personil = require('../models').personil;
const model = require("../models").sequelize;

/* GET home page. */
router.post("/adduser", async function(req, res) {
  //REAL TIME INSERT DATA
    const ws = new WebSocket("ws:/localhost:8000");

    ws.on("open", function open() {
      const data = JSON.stringify({
        npp: req.body.input1,
        // to: req.body.input2,
        // private: req.body.input3,
        // message: req.body.input4
      });
      ws.send(data);
    });

  const sql =
    "INSERT INTO personils (npp, nama_lengkap, alamat, created_at, updated_at) VALUES(?,?,?,?,?) ";
  const [[result]] = await model.query(sql, {
    replacements: [
      req.body.input1,
      req.body.input2,
      req.body.input3,
      new Date(),
      new Date()
    ],
    type: model.QueryTypes.INSERT
  });
  res.end();
});

router.get("/getuser", async function(req, res) {  
  const [result] = await model.query(`select * from personils`);
  res.send(result);
});

module.exports = router;
