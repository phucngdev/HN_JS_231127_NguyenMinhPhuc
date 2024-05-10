const authorService = require("../services/author.service");

module.exports.createAuthor = async (req, res) => {
  try {
    const result = await authorService.createAuthorService(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};

module.exports.getAllAuthor = async (req, res) => {
  try {
    const result = await authorService.getAllAuthorService();
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};

module.exports.getAllBookAnAuthor = async (req, res) => {
  try {
    const result = await authorService.getAllBookAnAuthorService(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};
