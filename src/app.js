const express = require("express");
const app = express();
const cors = require("cors");

const logger = require("morgan");
const helmet = require("helmet");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");
require("dotenv").config();

//Almacen personalizado con un tamaño limite de 1mb por archivo
//const upload = multer({ storage: storage, limits: { fileSize: 1000000 } });

//Routes
const actorsRoutes = require("./routes/actors.routes");
const directorsRoutes = require("./routes/directors.routes");
const usersRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");

//Middlewares
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

//Middleware para manejar errores
app.use((err, req, res, next) => {
  console.log(JSON.stringify(err));
  if (err.name === "SequelizeValidationError") {
    const errObj = {};
    err.errors.map((er) => {
      errObj[er.path] = er.message;
    });
    return res.status(400).send(errObj);
  }
  console.log(err.message);
  return res
    .status(500)
    .send("Ups tenemos un problema en el servidor, intentalo más tarde!");
});

module.exports = app;
