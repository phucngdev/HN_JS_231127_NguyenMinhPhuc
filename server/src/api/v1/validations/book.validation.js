module.exports.createBookValidate = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(500).json("Lỗi server");
    }
    if (name.langth > 50)
      return res.status(500).json("Tên không được vượt quá 50 ký tự");
    if (description.langth > 200)
      return res.status(500).json("Mô tả không được vượt quá 200 ký tự");
    next();
  } catch (error) {
    return res.status(500).json("Lỗi server");
  }
};
