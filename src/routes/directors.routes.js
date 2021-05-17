const multer = require("multer");
const { storage } = require("../helpers/multer");
const mystorage = storage("./uploads/directors");
const { verifyToken } = require("../middlewares/auth.middlewares");
const upload = multer({ storage: mystorage });
const { Router } = require("express");
const {
  getAll,
  create,
  update,
  updateProfilePhoto,
  remove,
} = require("../controllers/directors.controller");
require;

const route = Router();

//Endpoints
route.get("/directors", verifyToken, getAll); //READ
route.post("/directors", verifyToken, create); //CREATE
route.put("/directors/:id", verifyToken, update); //UPDATE
route.put(
  "/directors/:id/profile",
  verifyToken,
  upload.single("image"),
  updateProfilePhoto
); //UPDATE PROFILE PHOTO
route.delete("/directors/:id", verifyToken, remove); //DELETE

module.exports = route;
