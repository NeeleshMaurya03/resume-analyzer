require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "112233",
  database: "resume_analyzer",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// **Admin Login API**
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM admins WHERE username = ?";

  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
