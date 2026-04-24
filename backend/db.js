import mysql from "mysql2/promise";

const dbpool = mysql.createPool({
  host: "198.251.89.126",
  user: "isivgxsa_module_user",
  password: "=Y]A@ALM7d&_%McB",
  database: "isivgxsa_modules",
  port: 3306,
  connectionLimit: 10,
});

export default dbpool;