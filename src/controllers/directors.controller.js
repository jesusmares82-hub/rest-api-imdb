const { Directors } = require("../models");
const jwt = require("jsonwebtoken");

const getAll = async (req, res, next) => {
  try {
    const results = await Directors.findAll({ raw: true });
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res) => {
  try {
    const director = await Directors.create(req.body);
    res.json(director);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const director = await Directors.update(req.body, { where: { id } });
    res.json(director);
  } catch (error) {
    next(error);
  }
};

const updateProfilePhoto = async (req, res) => {
  try {
    const id = req.params.id;
    const director = await Directors.findOne({ where: { id: id } });
    req.body.profile_photo = req.file.path;
    const response = await Directors.update(req.body, { where: { id: id } });
    res.send("Photo Profile Updated.");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const director = await Directors.destroy({ where: { id } });
    res.json(director);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
  update,
  updateProfilePhoto,
  remove,
};
