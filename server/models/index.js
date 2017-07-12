const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/netflex');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Check connection to db
db.sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

// Models
db.Picture = require('./pictures.js')(sequelize, Sequelize);
db.Genre = require('./genres.js')(sequelize, Sequelize);
db.Job = require('./jobs.js')(sequelize, Sequelize);
db.CrewMember = require('./crew_members.js')(sequelize, Sequelize);
db.User = require('./users.js')(sequelize, Sequelize);

// Associations models
db.PictureGenre = require('./picture_genre.js')(sequelize, Sequelize);


// Associations
db.Genre.belongsToMany(db.Picture, {
	through: db.PictureGenre,
	foreignKey: 'genre_id',
	as: 'Picture'
});

db.Picture.belongsToMany(db.Genre, {
	through: db.PictureGenre,
	foreignKey: 'picture_id',
	as: 'Genre'
});



module.exports = db;