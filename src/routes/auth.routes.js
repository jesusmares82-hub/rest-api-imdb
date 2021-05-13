const { Router } = require("express");
const { login, verify } = require("../controllers/auth.controller");

const route = Router();

//Endpoints
route.get("/login", login); //READ
route.get("/verify/:hash", verify); //READ

module.exports = route;
