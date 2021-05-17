const multer = require("multer");
const mimetype = require("mime-types");

const storage = (path) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path);
    },
    filename: (req, file, cb) => {
      const ext = mimetype.extension(file.mimetype);
      cb(null, `${file.fieldname}${Date.now()}.${ext}`);
    },
  });
};

module.exports = {
  storage,
};
