const routerBooks = require("express").Router();
const bookController = require("../controllers/bookController");
const bookValidate = require("../validations/book.validation");

routerBooks.post(
  "/:id",
  bookValidate.createBookValidate,
  bookController.createBook
);

routerBooks.get("/", bookController.getAll);

routerBooks.get("/:id", bookController.getOne);

routerBooks.put(
  "/:id",
  bookValidate.createBookValidate,
  bookController.updateBook
);

routerBooks.delete("/:id", bookController.deleteBook);

module.exports = routerBooks;
