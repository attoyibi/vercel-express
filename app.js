const express = require("express");
const helmet = require("helmet");
const { ErrorResponseObject } = require("./common/http");
const routes = require("./routes");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(helmet());
app.use("/", routes);

// default catch all handler
app.all("*", (req, res) =>
  res.status(404).json(new ErrorResponseObject("route not defined"))
);
// Routing untuk login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Di sini Anda dapat menambahkan logika autentikasi pengguna.
  // Contoh sederhana:
  if (username === "user" && password === "password") {
    // Jika login berhasil, buat token JWT
    const token = jwt.sign({ username }, "secret_key"); // Ganti 'secret_key' dengan kunci rahasia yang lebih kuat

    // Kirim token sebagai respons
    res.json({ message: "Login berhasil", token });
  } else {
    res.status(401).json({ message: "Login gagal" });
  }
});
module.exports = app;
