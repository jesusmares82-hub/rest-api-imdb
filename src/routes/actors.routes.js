const { Router } = require("express");
const {
  getAll,
  create,
  update,
  remove,
} = require("../controllers/actors.controller");

const route = Router();

//Endpoints
route.get("/actors", getAll); //READ
route.post("/actors", create); //CREATE
route.put("/actors/:id", update); //UPDATE
route.delete("/actors/:id", remove); //DELETE

module.exports = route;
