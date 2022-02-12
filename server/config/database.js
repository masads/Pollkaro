const mysql = require("mysql2");

const conn = mysql.createPool({
  host: "remotemysql.com",
  user: "hZxMtBOyDw",
  password: "hOhTqGktAA",
  database: "hZxMtBOyDw",
});

module.exports = conn.promise();