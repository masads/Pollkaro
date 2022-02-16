const express = require("express");
const multer = require("multer");
const { signup, login} = require("../controllers/auth.js");
const { saveImage} = require("../controllers/images.js");
const upload = multer({dest:'images/'});

const router = express.Router();

router.post("/login", login);
router.post("/signup" , signup);
router.post("/images", upload.single('image'), saveImage);

module.exports = router;