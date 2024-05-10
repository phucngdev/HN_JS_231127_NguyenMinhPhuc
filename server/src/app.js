const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const routerBooks = require("./api/v1/routes/book.routes");
const routerAuthors = require("./api/v1/routes/author.routes");

// cấu hình
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/v1/book", routerBooks);
app.use("/api/v1/author", routerAuthors);

module.exports = app;
