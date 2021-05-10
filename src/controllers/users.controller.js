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

const get = async (req, res, next) => {
  try {
    const id = req.params.id;
    const results = await Users.find(req.body, { where: { id } });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    console.log(req.body);
    //bcrypt.genSalt(10, function (err, salt) {
    //  bcrypt.hash("B4c0//", salt, function (err, hash) {});
    //});
    //const user = await Users.create(req.body);
    //res.json(user);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  const longitud = 8;
  const newPassword = randPassword(longitud);
  try {
    const hash = await bcrypt.hash(newPassword, 10);
    const user = await User.find({ email: email });
    if (user.length > 0) {
      const id = req.params.id;
      const response = await Users.update({ email: email }, { password: hash });
      res.json(response);
    }
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
