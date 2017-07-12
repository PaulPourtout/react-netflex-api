module.exports = (sequelize, DataTypes) => {
	const Genre = sequelize.define('genre', {
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
	});


	// Genre.sync({ force: true }).then(() => {
	// 	// force: true will drop the table if it already exists
	// 	Genre.sync().then(() => {
	// 		// Table created
	// 		return Genre.create({
	// 			name: "thriller"
	// 		});
	// 	});
	// });

	return Genre;
}