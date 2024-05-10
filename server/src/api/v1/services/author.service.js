const utilsInsert = require("../utils/insert.utils");
const utilsFind = require("../utils/find.utils");
const pool = require("../../../config/connect");

module.exports.createAuthorService = async (data) => {
  try {
    const result = await utilsInsert.InsertInto("authors", data);
    if (result) {
      return {
        status: 200,
        message: "Thêm mới thành công",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.getAllAuthorService = async () => {
  try {
    const result = await utilsFind.findAll("authors");
    if (result) {
      return {
        status: 200,
        result: result,
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.getAllBookAnAuthorService = async (id) => {
  try {
    const [result] = await pool.execute(`
    SELECT books.*, authors.name AS author
    FROM books
    JOIN authors ON books.author = authors.id
  `);
    if (result) {
      return {
        status: 200,
        result: result,
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};
