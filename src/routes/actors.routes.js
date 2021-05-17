const { verifyToken } = require("../middlewares/auth.middlewares");

const { storage } = require("../helpers/multer");
const mystorage = storage("./uploads/actors");

const multer = require("multer");

const upload = multer({ storage: mystorage });

const { Router } = require("express");
const {
  getAll,
  create,
  update,
  updateProfilePhoto,
  remove,
} = require("../controllers/actors.controller");
require;

const route = Router();

//Endpoints
route.get("/actors", verifyToken, getAll); //READ
route.post("/actors", verifyToken, create); //CREATE
route.put("/actors/:id", verifyToken, update); // UPDATE BY ID
route.put(
  "/actors/:id/profile",
  verifyToken,
  upload.single("image"),
  updateProfilePhoto
); //UPDATE PROFILE PHOTO
route.delete("/actors/:id", verifyToken, remove); //DELETE

module.exports = route;
