const express = require("express");
const helmet = require("helmet");
const { ErrorResponseObject } = require("./common/http");
const routes = require("./routes");
// const jwt = require("jsonwebtoken"); // Import jsonwebtoken

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(helmet());
app.use("/", routes);

// Routing untuk login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Di sini Anda dapat menambahkan logika autentikasi pengguna.
  // Contoh sederhana:
  if (username === "user" && password === "password") {
    // Jika login berhasil, buat token JWT
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"; // Ganti 'secret_key' dengan kunci rahasia yang lebih kuat

    // Kirim token sebagai respons
    res.json({ message: "Login berhasil", token });
  } else {
    res.status(401).json({ message: "Login gagal" });
  }
});

// Routing untuk sign up
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Di sini Anda dapat menambahkan logika untuk membuat pengguna baru.
  // Contoh sederhana: hanya mencetak informasi pengguna yang berhasil dibuat
  console.log(`Pengguna baru: username=${username}, password=${password}`);

  res.json({ message: "Pendaftaran berhasil" });
});

// default catch all handler
app.all("*", (req, res) =>
  res.status(404).json(new ErrorResponseObject("route not defined"))
);

module.exports = app;
