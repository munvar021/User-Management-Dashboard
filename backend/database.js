const sqlite3 = require("sqlite3").verbose();
const DB_NAME = process.env.DB_NAME;
const db = new sqlite3.Database(DB_NAME, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the SQLite database.");
    const createTableSql = `
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                name TEXT,
                email TEXT
            )
        `;
    db.run(createTableSql, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  }
});

module.exports = db;
