const express = require("express");
const router = express.Router();
const db = require("../database.js");
const { v4: uuidv4 } = require("uuid");

// GET all users
router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// GET user by id
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// POST create a new user
router.post("/", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: "Please provide a name and email" });
    return;
  }
  const id = uuidv4();
  const sql = "INSERT INTO users (id, name, email) VALUES (?, ?, ?)";
  const params = [id, name, email];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: { id, name, email },
    });
  });
});

// PUT update a user
router.put("/:id", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: "Please provide a name and email" });
    return;
  }
  const sql = `UPDATE users set 
           name = COALESCE(?,name), 
           email = COALESCE(?,email) 
           WHERE id = ?`;
  const params = [name, email, req.params.id];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({
      message: "success",
      data: { name, email },
      changes: this.changes,
    });
  });
});

// DELETE a user
router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id = ?";
  const params = [req.params.id];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: "deleted", changes: this.changes });
  });
});

module.exports = router;
