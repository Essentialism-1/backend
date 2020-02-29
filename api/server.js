require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/router.js");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
