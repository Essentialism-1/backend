const router = require("express").Router();
const db = require("../database/connection.js");

router.post("/:id", (req, res) => {
  const user_id = req.params.id;
  const user_values_array = req.body.values.map(value_set => {
    return {
      user_id,
      ...value_set,
      user_values_id: parseInt(`${user_id}${value_set.values_id}`)
    };
  });

  db("user_values")
    .insert(user_values_array)
    .returning(["values_id", "description"])
    .then(array => {
      console.log(array);

      db("user_values")
        .join("values", "user_values.values_id", "=", "values.id")
        .where("user_values.user_id", req.params.id)
        .select(
          "user_values.values_id",
          "values.value",
          "user_values.description"
        )
        .then(vals => res.status(201).json(vals))
        .catch(({ name, message, stack, code }) => {
          console.log({ name, message, stack, code });

          res.status(500).json({ name, message, stack, code });
        });
    })
    .catch(({ name, message, stack, code }) => {
      console.log({ name, message, stack, code });

      res.status(500).json({ name, message, stack, code });
    });
});

router.get("/:id", (req, res) => {
  db("user_values")
    .join("values", "user_values.values_id", "=", "values.id")
    .where("user_values.user_id", req.params.id)
    .select(
      "user_values.user_id",
      "user_values.values_id",
      "values.value",
      "user_values.description"
    )
    .then(vals => res.status(201).json(vals))
    .catch(({ name, message, stack, code }) => {
      console.log({ name, message, stack, code });

      res.status(500).json({ name, message, stack, code });
    });
});

module.exports = router;
