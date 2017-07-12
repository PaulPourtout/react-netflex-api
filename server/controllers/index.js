// db
const db = require('../models');


const controllers = {};

controllers.pictures = require('./pictures.js')(db);
controllers.genres = require('./genres.js')(db);
controllers.users = require('./users.js')(db);

module.exports = controllers;