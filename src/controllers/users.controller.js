const { Users, Validate_Accounts } = require("../models");
const bcrypt = require("bcryptjs");
const { emailOptions, sendEmail } = require("../helpers/nodemailer");
require("dotenv").config();
const getAll = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = 3;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const offset = (page - 1) * limit;

  const links = {};
  const result = {};

  try {
    const resul = await Users.findAndCountAll({
      where: { active: true },
      limit,
      offset,
    });
    console.log(endIndex);
    if (endIndex < resul.count) {
      links.next = {
        page: `http://localhost:8000/api/v1/users?page=${page + 1}`,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      links.previous = {
        page: `http://localhost:8000/api/v1/users?page=${page - 1}`,
        limit: limit,
      };
    }

    links.base = {
      page: `http://localhost:8000/api/v1/users?page=${page}`,
      limit: limit,
    };
    result._links = links;
    result.size = limit;
    result.start = offset;
    result.results = resul;
    console.log(result);
    next();
    res.json(result);
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
    const name = user.dataValues.firstname;
    req.body.user_id = user.dataValues.id;
    console.log(req.body.user_id);

    const email = req.body.email;
    const userHash = await bcrypt.hash(email, longitud);
    var buscar = "/";
    req.body.hash = userHash.replace(new RegExp(buscar, "g"), "$");

    const validate_user = await Validate_Accounts.create(req.body);
    console.log(validate_user);

    emailOptions.subject = "Email confirmation";
    emailOptions.to = email;
    emailOptions.bcc = "jesus_mares_t@hotmail.com";
    emailOptions["template"] = "email";
    emailOptions["context"] = {
      title: `http://localhost:8000/api/v1/verify/${userHash}`,
      name: name,
    };

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

module.exports = {
  getAll,
  getById,
  get,
  create,
  update,
  remove,
};
