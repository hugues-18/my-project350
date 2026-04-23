import mysql from "mysql2/promise";

const dbpool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "e_learning",
});

export default dbpool;