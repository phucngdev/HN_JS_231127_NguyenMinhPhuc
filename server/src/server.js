const http = require("http");
const app = require("./app");
const server = http.createServer(app);
require("dotenv").config();

server.listen(process.env.PORT, () => {
  console.log(`Server run http://localhost:${process.env.PORT}`);
});
