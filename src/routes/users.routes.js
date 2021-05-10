const { Router } = require("express");
const {
  getAll,
  get,
  create,
  update,
  remove,
} = require("../controllers/users.controller");

const route = Router();

//Endpoints
route.get("/users", getAll); //READ
route.get("/users/:id", get); //READ ID
route.post("/users", create); //CREATE
route.put("/users/:id", update); //UPDATE
route.delete("/users/:id", remove); //DELETE

module.exports = route;
