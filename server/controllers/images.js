const conn = require("../config/database.js");
var path = require("path");
const fs = require("fs");

const saveImage = (req, res, next) => {
    res.status(200).json({ message: "image" });
};

  module.exports = { saveImage};