const pool = require("../../../config/connect");

module.exports.findByIdAndUpdateOne = async (table, id, key, value) => {
  try {
    console.log(`UPDATE ${table} SET ${key} = ${value} WHERE id = ?`);
    return await pool.execute(
      `UPDATE ${table} SET ${key} = ${value} WHERE id = ?`,
      [id]
    );
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.findByIdAndUpdate = async (table, id, body) => {
  try {
    // tạo arr chứa các value
    const values = [];
    // tạo query dạng "key = ?, key = ?"
    const queryString = Object.entries(body)
      .map(([key, value]) => {
        // Thêm giá trị vào mảng
        values.push(value);
        // Trả về phần tử query cho map
        return `${key} = ?`;
      })
      .join(", "); // nối query = ", "
    return await pool.execute(
      `UPDATE ${table} SET ${queryString}, updated_at = ? WHERE id = ?`,
      [...values, new Date(), id]
    );
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};
