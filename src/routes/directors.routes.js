const multer = require("multer");
const mimetype = require("mime-types");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/directors");
  },
  filename: (req, file, cb) => {
    const ext = mimetype.extension(file.mimetype);
    cb(null, `${file.fieldname}${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage: storage });

const { Router } = require("express");
const {
  getAll,
  create,
  update,
  updateProfilePhoto,
  remove,
  verifyToken,
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
