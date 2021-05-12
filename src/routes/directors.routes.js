const { Router } = require("express");
const {
  getAll,
  create,
  update,
  remove,
  verifyToken,
} = require("../controllers/directors.controller");

const route = Router();

//Endpoints
route.get("/directors", verifyToken, getAll); //READ
route.post("/directors", verifyToken, create); //CREATE
route.put("/directors/:id", verifyToken, update); //UPDATE
route.delete("/directors/:id", verifyToken, remove); //DELETE

module.exports = route;
