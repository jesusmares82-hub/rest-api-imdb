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

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const director = await Directors.destroy({ where: { id } });
    res.json(director);
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
        return res.json({ mensaje: "Token inválido" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Token no proporcionado.",
    });
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
  verifyToken,
};
