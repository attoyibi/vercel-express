const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");

const r = Router();

r.get("/", (req, res) =>
  res.json(new SuccessResponseObject("login path live 🚀"))
);
// Routing untuk login
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   // Di sini Anda dapat menambahkan logika autentikasi pengguna.
//   // Contoh sederhana:
//   if (username === "user" && password === "password") {
//     // Jika login berhasil, buat token JWT
//     const token = jwt.sign({ username }, "secret_key"); // Ganti 'secret_key' dengan kunci rahasia yang lebih kuat

//     // Kirim token sebagai respons
//     res.json({ message: "Login berhasil", token });
//   } else {
//     res.status(401).json({ message: "Login gagal" });
//   }
// });
module.exports = r;
