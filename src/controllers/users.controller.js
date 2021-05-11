const { Users } = require("../models");
const bcrypt = require("bcryptjs");

const getAll = async (req, res, next) => {
  try {
    const results = await Users.findAll({ raw: true });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

//const get = async (req, res, next) => {
//  try {
//    const id = req.params.id;
//    const results = await Users.find(req.body, { where: { id } });
//    res.json(results);
//  } catch (error) {
//    next(error);
//  }
//};

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
    const email = req.body.email;
    const password = req.body.password;
    const longitud = 8;
    const passwordHash = await bcrypt.hash(password, longitud);
    req.body.password = passwordHash;
    console.log(passwordHash);
    const user = await Users.create(req.body);
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
  get,
  create,
  update,
  remove,
};
