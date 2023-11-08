const express = require("express");
const APP_SERVER = express();
const BODY_PARSER = require("body-parser");

APP_SERVER.use(BODY_PARSER.urlencoded({ extended: true }));
APP_SERVER.use(BODY_PARSER.json());



// const CountriesRouter = require("./Controllers/Countries.controller.js");
const FileRouter = require("./Controllers/files.controller.js");

// APP_SERVER.use("/countries", CountriesRouter);
APP_SERVER.use("/filesystem", FileRouter);

module.exports = APP_SERVER;