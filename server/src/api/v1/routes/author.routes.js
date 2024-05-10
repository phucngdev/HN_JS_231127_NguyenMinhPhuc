const routerAuthors = require("express").Router();
const authorController = require("../controllers/authhorController");
const authorValidate = require("../validations/author.validation");

routerAuthors.post(
  "/",
  authorValidate.createAuthorValidate,
  authorController.createAuthor
);

routerAuthors.get("/", authorController.getAllAuthor);

routerAuthors.get("/:id/books", authorController.getAllBookAnAuthor);

module.exports = routerAuthors;
