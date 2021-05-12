const { Router } = require("express");
const {
  getAll,
  create,
  update,
  remove,
  verifyToken,
} = require("../controllers/actors.controller");

const route = Router();

//Endpoints
route.get("/actors", verifyToken, getAll); //READ
route.post("/actors", verifyToken, create); //CREATE
route.put("/actors/:id", verifyToken, update); //UPDATE
route.delete("/actors/:id", verifyToken, remove); //DELETE

module.exports = route;
