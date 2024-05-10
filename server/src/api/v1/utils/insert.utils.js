const pool = require("../../../config/connect");

module.exports.InsertInto = async (table, body) => {
  try {
    // tạo arr chứa các value
    const values = [];
    let queryStringKeys = "";
    let queryStringValues = "";

    for (const [key, value] of Object.entries(body)) {
      values.push(value);
      queryStringKeys += `${key}, `;
      queryStringValues += "?,";
    }
    // Xóa dấu ',' cuối chuỗi
    queryStringKeys = queryStringKeys.slice(0, -2);
    queryStringValues = queryStringValues.slice(0, -1);

    const [result] = await pool.execute(
      `INSERT INTO ${table} (${queryStringKeys}) VALUES (${queryStringValues})`,
      [...values]
    );
    return result;
  } catch (error) {
    return {
      status: 500,
      message: "Lỗi server",
    };
  }
};
