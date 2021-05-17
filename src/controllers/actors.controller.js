const { Actors } = require("../models");
const jwt = require("jsonwebtoken");

const getAll = async (req, res, next) => {
  try {
    const results = await Actors.findAll({ raw: true });
    //const results = await Actors.findAndCountAll({
    //  where: { active: true },
    //  limit: 3,
    //  offset = (page - 1) * limit,
    //});
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const actor = await Actors.create(req.body);
    res.json(actor);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const actor = await Actors.update(req.body, { where: { id } });
    res.json(actor);
  } catch (error) {
    next(error);
  }
};

const updateProfilePhoto = async (req, res) => {
  try {
    const id = req.params.id;
    const actor = await Actors.findOne({ where: { id: id } });
    req.body.profile_photo = req.file.path;
    const response = await Actors.update(req.body, { where: { id: id } });
    res.send("Photo Profile Updated.");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const actor = await Actors.destroy({ where: { id } });
    res.json(actor);
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
