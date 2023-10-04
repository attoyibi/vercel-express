const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");

const r = Router();

r.get("/", (req, res) =>
  res.json(new SuccessResponseObject("login path live 🚀"))
);

// Rute untuk login (POST)
r.post("/", (req, res) => {
  // Di sini Anda dapat menambahkan logika autentikasi pengguna.
  // Contoh sederhana:
  const { username, password } = req.body;
  const { username2 } = "req.body";
  //   res.json(new SuccessResponseObject("login post path live 🚀"));
  console.log(username);
  res.json(new SuccessResponseObject(`value username = ${username2}`));
});
module.exports = r;
