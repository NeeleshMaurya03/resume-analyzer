const bcrypt = require("bcryptjs");

const plainPassword = "admin123"; // Change this to your desired password
bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hashed Password:", hash);
});
