const bookService = require("../services/book.service");

module.exports.createBook = async (req, res) => {
  try {
    const result = await bookService.createBookService(req.body, req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const result = await bookService.getAllBookService();
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};

module.exports.getOne = async (req, res) => {
  try {
    const result = await bookService.getOneBookService(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};

module.exports.updateBook = async (req, res) => {
  try {
    const result = await bookService.updateBookService(req.params.id, req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};

module.exports.deleteBook = async (req, res) => {
  try {
    const result = await bookService.deleteBookService(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};
