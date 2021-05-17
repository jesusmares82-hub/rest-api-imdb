const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers["access-token"];
  //Quitamos la palabra Bearer del valor de la cabecera authorization
  token = token.replace(/^Bearer\s+/, "");
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).json({ mensaje: "Invalid Token" });
      } else {
        req.decoded = decoded;
        console.log(decoded);
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Invalid Token",
    });
  }
};

module.exports = { verifyToken };
