const app = require("./app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Servidor escuchando desde el puerto", PORT);
});
