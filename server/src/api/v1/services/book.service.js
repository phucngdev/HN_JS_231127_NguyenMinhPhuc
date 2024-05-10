const utilsInsert = require("../utils/insert.utils");
const utilsFind = require("../utils/find.utils");
const utilsUpdate = require("../utils/update.utils");
const utilsDelete = require("../utils/delete.utils");
const pool = require("../../../config/connect");

module.exports.createBookService = async (data) => {
  try {
    const { authorId } = data;
    const bookInsertResult = await utilsInsert.InsertInto("books", {
      name: data.name,
      description: data.description,
      price: data.price,
    });
    if (bookInsertResult && bookInsertResult.insertId) {
      await utilsInsert.InsertInto("book_author", {
        book_id: bookInsertResult.insertId,
        author_id: authorId,
      });
    }
    return {
      status: 201,
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
    const [[result]] = await pool.execute(
      `SELECT books.id AS book_id,
           books.name AS book_name,
           books.description AS book_description,
           books.price AS book_price,
           books.created_at AS book_created_at,
           books.updated_at AS book_updated_at,
           authors.name AS author_name,
           authors.id AS author_id,
           authors.biography AS author_biography
      FROM books
      JOIN book_author ON books.id = book_author.book_id
      JOIN authors ON book_author.author_id = authors.id
      WHERE books.id = ?`,
      [id]
    );
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
    const result = await utilsUpdate.findByIdAndUpdate("books", id, {
      name: data.name,
      description: data.description,
      price: data.price,
    });
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
    await pool.execute("DELETE FROM book_author WHERE book_id = ?", [id]);
    await pool.execute("DELETE FROM books WHERE id = ?", [id]);
    return {
      status: 200,
      message: "Xoá thành công",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.searchBookService = async (q) => {
  try {
    const [result] = await pool.execute(
      `SELECT * FROM books WHERE name LIKE ?`,
      [`%${q}%`]
    );
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

module.exports.ascBookService = async () => {
  try {
    const [result] = await pool.execute(
      "SELECT * FROM books ORDER BY price ASC"
    );
    console.log(result);
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

module.exports.descBookService = async () => {
  try {
    const [result] = await pool.execute(
      "SELECT * FROM books ORDER BY price DESC"
    );
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

module.exports.searchBookService = async (q) => {
  try {
    const [result] = await pool.execute(
      `SELECT * FROM books WHERE name LIKE ?`,
      [`%${q}%`]
    );
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
