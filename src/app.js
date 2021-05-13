const express = require("express");
const app = express();
const cors = require("cors");

const logger = require("morgan");
const helmet = require("helmet");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");
const { emailOptions, sendEmail } = require("./helpers/nodemailer");
require("dotenv").config();
const multer = require("multer");
const mimetype = require("mime-types");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const ext = mimetype.extension(file.mimetype);
    cb(null, `${file.fieldname}${Date.now()}.${ext}`);
  },
});
//Almacen personalizado con un tamaño limite de 1mb por archivo
const upload = multer({ storage: storage, limits: { fileSize: 1000000 } });

//Routes
const actorsRoutes = require("./routes/actors.routes");
const directorsRoutes = require("./routes/directors.routes");
const usersRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");

//Middleware
app.use(cors()); //Implementará CORS en el servidor
app.use(helmet()); // Implementará Helmet en el servidor
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(
  logger("combined", {
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.json({ "academlo-api": "1.0.0" }));

app.use("/api/v1/", actorsRoutes);
app.use("/api/v1/", directorsRoutes);
app.use("/api/v1/", usersRoutes);
app.use("/api/v1/", authRoutes);

/* === Envío de correos === */
app.post("/api/v1/reset-password", (req, res) => {
  emailOptions.subject = "Restablecer contraseña";
  emailOptions["template"] = "email"; //res.render('email', )
  emailOptions["context"] = { title: "Restablecer contraseña" }; //res.render('email', {title: 'Restablecer contraseña'} );

  sendEmail(emailOptions);
});

app.post("/api/v1/gallery", upload.single("image"), (req, res) => {
  try {
    res.send(req.file);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//MNiddleware para manejar errores
app.use((err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({ message: error.message });
  }
  console.log(err.message);
  return res.status(500).send("Something broke!");
});

module.exports = app;
