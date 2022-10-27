const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.pets = require("./pet.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.alerts = require("./alert.model.js")(mongoose);

module.exports = db;
