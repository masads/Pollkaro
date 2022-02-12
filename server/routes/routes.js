const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./images");
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage,
});
const { signup, login} = require("../controllers/auth.js");
const { saveImage} = require("../controllers/images.js");


const router = express.Router();

router.post("/login", login);
router.post("/signup" , signup);
router.post("/images", upload.array('image',900), saveImage);

module.exports = router;