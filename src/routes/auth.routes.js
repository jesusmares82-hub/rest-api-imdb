const { Router } = require("express");
const { login } = require("../controllers/auth.controller");

const route = Router();

//Endpoints
route.get("/login", login); //READ

module.exports = route;
