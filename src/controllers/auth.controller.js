const { Users } = require("../models");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const results = await Users.findOne({ where: { email: email } });
  console.log(results.dataValues.email);
  console.log(results.dataValues.password);
  const passworDB = await bcrypt.compare(password, results.dataValues.password);
  console.log(passworDB);
  try {
    if (results.dataValues.email === email && passworDB) {
      const token = jwt.sign(results.dataValues, process.env.JWT_KEY, {
        algorithm: "HS512",
        expiresIn: "1h",
      });
      res.json({ token });
    }
  } catch (error) {
    res.status(500).json({ message: "Ops! There was a problem on the server" });
  }
};

module.exports = {
  login,
};
