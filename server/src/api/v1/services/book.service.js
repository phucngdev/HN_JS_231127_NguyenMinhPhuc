const utilsInsert = require("../utils/insert.utils");
const utilsFind = require("../utils/find.utils");
const utilsUpdate = require("../utils/update.utils");
const utilsDelete = require("../utils/delete.utils");

module.exports.createBookService = async (data, authorId) => {
  try {
    const bookInsertResult = await utilsInsert.InsertInto("books", data);
    if (bookInsertResult && bookInsertResult.insertId) {
      await utilsInsert.InsertInto("book_author", {
        book_id: bookInsertResult.insertId,
        author_id: authorId,
      });
    }
    return {
      status: 200,
      message: "Thêm thành công",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.getAllBookService = async () => {
  try {
    const result = await utilsFind.findAll("books");
    return {
      status: 200,
      result: result,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.getOneBookService = async (id) => {
  try {
    const result = await utilsFind.findById("books", id);
    return {
      status: 200,
      result: result,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.updateBookService = async (id, data) => {
  try {
    const result = await utilsUpdate.findByIdAndUpdate("books", id, data);
    if (result) {
      return {
        status: 200,
        message: "Update thành công",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.deleteBookService = async (id) => {
  try {
    const result = await utilsDelete.findByIdAndDelete("books", id);
    if (result) {
      return {
        status: 200,
        message: "Xoá thành công",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};
