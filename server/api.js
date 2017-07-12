const express = require('express');
const apiRouter = express();
const db = require('./models');
const passport = require('passport');

// controllers
const controllers = require('./controllers');
const authController = require('./controllers/auth.js');

//load passport strategies
require('./../config/passport.js')(passport, db.User);


const initServer = () => {
	const { pictures, genres, users } = controllers;

	// Pictures
	apiRouter.get('/pictures', (req, res) => pictures.getAll(req, res));
	apiRouter.get('/picture/:id', (req, res) => pictures.getOne(req, res));
	apiRouter.post('/picture', (req, res) => pictures.addOne(req, res));


	// Genres
	apiRouter.get('/genres', (req, res) => genres.getAll(req, res));
	apiRouter.get('/genre/:id', (req, res) => genres.getOne(req, res));
	apiRouter.post('/genre', (req, res) => genres.addOne(req, res));

	// Users
	apiRouter.get('/users', (req, res) => users.getAll(req, res));
	apiRouter.get('/user/:id', (req, res) => users.getOne(req, res));
	apiRouter.post('/user', (req, res) => users.addOne(req, res));

	// Auth
	// apiRouter.get('/signup', (req, res) => authController.signup(req, res));
	apiRouter.post('/signup', passport.authenticate('local-signup', {
		// successRedirect: '/connected',
		successFlash: 'Welcome!',
		// failureRedirect: '/failed',
		failureFlash: true
	}));
}



db.sequelize.sync({ force: false })
	.then(() => {
		console.log("The database looks fine");
		initServer();
	})
	.catch(err => {
		console.log("something went wrong :", err);
	});
;


module.exports = apiRouter;