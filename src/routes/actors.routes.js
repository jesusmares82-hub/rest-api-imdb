const { verifyToken } = require("../middlewares/auth.middlewares");
//const { storage } = require("../helpers/multer");
const multer = require("multer");
const mimetype = require("mime-types");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/actors");
  },
  filename: (req, file, cb) => {
    const ext = mimetype.extension(file.mimetype);
    cb(null, `${file.fieldname}${Date.now()}.${ext}`);
  },
});
//const upload = multer({ storage: storage("./uploads/actors") });

const upload = multer({ storage: storage });

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
route.put("/actors/:id", verifyToken, update); //UPDATE
route.put(
  "/actors/:id/profile",
  verifyToken,
  upload.single("image"),
  updateProfilePhoto
); //UPDATE PROFILE PHOTO
route.delete("/actors/:id", verifyToken, remove); //DELETE

module.exports = route;
