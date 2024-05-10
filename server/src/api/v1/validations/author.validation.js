module.exports.createAuthorValidate = async (req, res, next) => {
  try {
    const { name, biography } = req.body;
    if (!name || !biography) {
      return res.status(500).json("Lỗi server");
    }
    next();
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};
