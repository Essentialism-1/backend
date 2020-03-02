const router = require("express").Router();
const Projects = require("./model.js");

router.post("/", (req, res) => {
  Projects.add(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(({ name, message, stack, code }) => {
      res.status(500).json({ name, message, stack, code });
    });
});

router.get("/user/:id", (req, res) => {
  Projects.getAllByUser(req.params.id)
    .then(projects => {
      res.json(projects);
    })
    .catch(({ name, message, stack, code }) => {
      res.status(500).json({ name, message, stack, code });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Projects.editProject(id, req.body)
    .then(project => {
      return res.json({ message: "project successfully updated", project });
    })
    .catch(({ name, message, stack, code }) => {
      res.status(500).json({ name, message, stack, code });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Projects.deleteProject(id)
    .then(() => {
      res.status(200).json({ message: "project deleted successfully" });
    })
    .catch(({ name, message, stack, code }) => {
      res.status(500).json({ name, message, stack, code });
    });
});

module.exports = router;
