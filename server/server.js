const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 8000;

//middleware
app.use(cors()); //making cross-domain requests possible
app.use(json()); // tells the system that you want json to be used.
app.use(urlencoded({ extended: true })); //allow us to attach parameters to a url like(?) etc
app.use(morgan("dev")); //it does all the loging for us (run server by using "yarn dev" )("dev"->for details goto package.json scripts)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});