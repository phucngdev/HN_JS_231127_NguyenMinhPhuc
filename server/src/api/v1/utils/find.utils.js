// const pool = require("../../../config/connect");

const pool = require("../../../config/connect");

module.exports.findById = async (table, id) => {
  try {
    const [result] = await pool.execute(`SELECT * FROM ${table} WHERE id = ?`, [
      id,
    ]);
    return result;
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};

module.exports.findAll = async (table, id) => {
  try {
    let query = `SELECT * FROM ${table}`;
    const values = [];
    if (id) {
      query += ` WHERE id != ?`;
      values.push(id);
    }
    const [result] = await pool.execute(query, values);
    return result;
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};
