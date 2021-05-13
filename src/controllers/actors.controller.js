const { Actors } = require("../models");
const jwt = require("jsonwebtoken");

const getAll = async (req, res, next) => {
  try {
    const results = await Actors.findAll({ raw: true });
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
    console.log(req.params);
    const id = req.params.id;
    const actor = await Actors.findOne({ where: { id: id } });
    console.log(actor.dataValues.profile_photo);
    req.body.profile_photo = req.file.path;
    console.log(req.file);
    const response = await Actors.update(req.body, { where: { id: id } });
    console.log(response);
    res.send(req.file);
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
  create,
  update,
  updateProfilePhoto,
  remove,
  verifyToken,
};
