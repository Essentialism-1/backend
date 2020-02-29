const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "email", "password", "name");
}

function findBy(filter) {
  return db("users").where(filter);
}

/* async */ function add(user) {
  console.log(user);
  return /* const [id] = await */ db("users")
    .insert(user)
    .returning("id")
    .then(id => {
      return findById(id[0]);
    });

  /* return findById(id); */
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
