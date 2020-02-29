require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restricted = require("../auth/restricted.js");
const authRouter = require("../auth/router.js");
const valuesRouter = require("../values/router.js");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/auth", authRouter);
server.use("/api/values", restricted, valuesRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
