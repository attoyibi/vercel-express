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
  res.json(new SuccessResponseObject("login post path live 🚀"));

  //   if (username === "user" && password === "password") {
  //     // Jika login berhasil, Anda dapat mengirim respons sukses
  //     res.json(new SuccessResponseObject("Login berhasil"));
  //   } else {
  //     // Jika login gagal, Anda dapat mengirim respons gagal
  //     res.status(401).json(new ErrorResponseObject("Login gagal"));
  //   }
});
module.exports = r;
