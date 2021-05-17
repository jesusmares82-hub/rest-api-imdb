const { Router } = require("express");
const {
  getAll,
  getById,
  get,
  create,
  update,
  remove,
} = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/auth.middlewares");

const route = Router();

//Endpoints
route.get("/users", verifyToken, getAll); //READ
route.get("/users/:id", getById); //READ ID
route.get("/users/:email", verifyToken, get); //READ ByEmail
route.post("/users", create); //CREATE Registro de usuario
route.put("/users/:id", verifyToken, update); //UPDATE
route.delete("/users/:id", verifyToken, remove); //DELETE

module.exports = route;


