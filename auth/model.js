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

function add(user) {
  console.log(user);
  return db("users")
    .insert(user)
    .returning("id")
    .then(id => {
      return findById(id[0]);
    });
}

function findById(id) {
  return db("users")
    .select("id", "email", "name")
    .where({ id })
    .first();
}
