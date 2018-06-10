"use strict";

//Import dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Create an instance of express and of its router
var app = express();
var router = express.Router();

/*Set our port to either a predetermined port number if you have set
it up in your environment, or 3001 */
var port = process.env.API_PORT || 3001;

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test_1";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

/*Configure Express to use body-parser to parse request bodies in JSON. */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS configuration

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//Add a route!
router.route("/").get((req, res) => {
  res.json({ message: "Initialized!" });
});

router.route("/a").get((req, res) => {
  res.json({ message: "Initialized2!" });
});

//Configure Express to add '/api' in front of routes
app.use("/api", router);

//Start listening on specified port
app.listen(port, () => {
  console.log(`api running on port ${port}`);
});
