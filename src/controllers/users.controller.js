const { Users } = require("../models");

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

const create = async (req, res) => {
  try {
    const actor = await Users.create(req.body);
    res.json(actor);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const actor = await Users.update(req.body, { where: { id } });
    res.json(actor);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const actor = await Users.destroy({ where: { id } });
    res.json(actor);
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
