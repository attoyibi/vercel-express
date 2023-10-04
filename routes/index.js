const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");
const demo = require("./demo.route");
const demo = require("./login.route");

const r = Router();

r.use("/demo", demo);
r.use("/login", demo);

r.get("/", (req, res) =>
  res.json(new SuccessResponseObject("express vercel boiler plate"))
);

module.exports = r;
