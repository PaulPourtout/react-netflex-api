const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const apiRouter = require('./server/api.js');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const env = require('dotenv').load();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(flash());
app.use(session({ secret: 'secretpass', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Set headers for responses
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, PATCH");
	res.header("Access-Control-Allow-Headers", "Origin, Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Max-Age", "3600");
	next();
});

app.get('/connected', (req, res) => res.send('connected'));
app.get('/failed', (req, res) => res.send('failed'));

app.use('/api', apiRouter);

app.get('*', (req, res) => res.status(404).send('Page Not Found'));

app.listen(PORT, (req, res) => console.log('Server listens port ' + PORT));