const router = require("express").Router();
const db = require("../database/connection.js");

router.get("/", (req, res) => {
  db("values")
    .select("id", "value")
    .then(values => {
      res.json(values);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
