const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");
const demo = require("./demo.route");
const login = require("./login.route");

const r = Router();

r.use("/demo", demo);
r.use("/login", login);

r.get("/", (req, res) =>
  res.json(new SuccessResponseObject("express vercel boiler plate"))
);

module.exports = r;
