var express = require("express");
var router = express.Router();

var mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "book_record",
  connectionLimit: 5,
});

async function isLogin(id, password) {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    //console.log("id : " + id + " password : " + password);
    const query =
      "SELECT 1 FROM USER_MST WHERE USER_NAME='" +
      id +
      "' AND PASSWORD='" +
      password +
      "'";
    console.log(query);
    rows = await conn.query(query);
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
    // console.log(rows[0]);
    return rows[0];
  }
}

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/signIn", async function (req, res, next) {
  const login = await isLogin(req.query.id, req.query.password);
  console.log(login);
  if (login != undefined) {
    res.send(true);
  } else {
    res.send(false);
  }
});

module.exports = router;
