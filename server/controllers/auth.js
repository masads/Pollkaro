const conn = require("../config/database.js");

const signup = async (req, res, next) => {
    console.log(req.body);
    res.status(200).json({ message: "register" });
};
const login = async (req, res, next) => {
    
};

module.exports = { signup,login };