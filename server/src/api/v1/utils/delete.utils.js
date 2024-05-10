const pool = require("../../../config/connect");

module.exports.findByIdAndDelete = async (table, id) => {
  try {
    return await pool.execute(`DELETE FROM ${table} WHERE id = ?`, [id]);
  } catch (error) {
    return {
      message: "Lỗi server",
    };
  }
};
