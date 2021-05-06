const { Router } = require("express");
const {
  getAll,
  create,
  update,
  remove,
} = require("../controllers/directors.controller");

const route = Router();

//Endpoints
route.get("/directors", getAll); //READ
route.post("/directors", create); //CREATE
route.put("/directors/:id", update); //UPDATE
route.delete("/directors/:id", remove); //DELETE

module.exports = route;
