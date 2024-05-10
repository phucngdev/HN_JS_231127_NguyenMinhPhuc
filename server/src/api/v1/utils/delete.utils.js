const pool = require("../../../config/connect");

module.exports.findByIdAndDelete = async (table, id) => {
  try {
    const result = await pool.execute(`DELETE FROM ${table} WHERE id = ?`, [
      id,
    ]);

    return result;
  } catch (error) {
    return {
      message: "Lỗi server",
    };
  }
};
