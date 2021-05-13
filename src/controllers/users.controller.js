const { Users, Validate_Accounts } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { emailOptions, sendEmail } = require("../helpers/nodemailer");

const getAll = async (req, res, next) => {
  try {
    const results = await Users.findAll({ raw: true });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const results = await Users.find(req.body, { where: { id } });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const email = req.body.email;
    const results = await Users.findOne({ where: { email: email } });
    console.log(results.dataValues);
    res.json(results.dataValues);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const password = req.body.password;
    const longitud = 8;
    const passwordHash = await bcrypt.hash(password, longitud);

    req.body.password = passwordHash;
    console.log(passwordHash);
    const user = await Users.create(req.body);

    console.log(user.dataValues.id);
    req.body.user_id = user.dataValues.id;
    console.log(req.body.user_id);

    const email = req.body.email;
    const userHash = await bcrypt.hash(email, longitud);
    req.body.hash = userHash;

    const validate_user = await Validate_Accounts.create(req.body);
    console.log(validate_user);

    emailOptions.subject = "Email confirmation";
    emailOptions["template"] = "email"; //res.render('email', )
    emailOptions["context"] = {
      title: `http://localhost:8000/api/v1/verify/${userHash}`,
    }; //res.render('email', {title: 'Restablecer contraseña'} );

    sendEmail(emailOptions);

    res.json(user);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const email = req.body.email;
    const newPassword = req.body.password;
    const longitud = 8;
    const newPasswordHash = await bcrypt.hash(newPassword, longitud);
    const id = req.params.id;
    req.body.password = newPasswordHash;
    const response = await Users.update(req.body, { where: { id } });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.destroy({ where: { id } });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers["access-token"];
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({ mensaje: "Invalid Token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Token not provided",
    });
  }
};

module.exports = {
  getAll,
  getById,
  get,
  create,
  update,
  remove,
  verifyToken,
};
