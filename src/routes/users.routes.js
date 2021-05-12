const { Router } = require("express");
const {
  getAll,
  get,
  create,
  update,
  remove,
  verifyToken,
} = require("../controllers/users.controller");

const route = Router();

//Endpoints
route.get("/users", verifyToken, getAll); //READ
//route.get("/users/:id", get); //READ ID
route.get("/users/:email", verifyToken, get); //READ ByEmail
route.post("/users", verifyToken, create); //CREATE Registro de usuario
route.put("/users/:id", verifyToken, update); //UPDATE
route.delete("/users/:id", verifyToken, remove); //DELETE

module.exports = route;
