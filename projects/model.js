const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getAllByUser,
  editProject,
  deleteProject
};

function find() {
  return db("projects").select(
    "id",
    "title",
    "body",
    "completed",
    "user_values_id"
  );
}

function findBy(filter) {
  return db("projects").where(filter);
}

function getAllByUser(user_id) {
  return db("projects")
    .join("user_values", "projects.user_values_id", "=", "user_values.id")
    .select(
      "projects.id",
      "projects.user_values_id",
      "user_values.values_id",
      "projects.title",
      "projects.body",
      "projects.completed"
    )
    .where("user_values.user_id", user_id);
}

function add(project) {
  console.log(project);
  return db("projects")
    .insert(project)
    .returning("id")
    .then(id => {
      return findById(id[0]);
    });
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function deleteProject(id) {
  return db("projects")
    .where({ id })
    .del();
}

function editProject(project_id, project_update) {
  return db("projects")
    .where({ id: project_id })
    .update(project_update)
    .returning("id")
    .then(id => {
      return findById(id[0]);
    });
}
