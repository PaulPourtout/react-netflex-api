module.exports = (sequelize, DataTypes) => {
	const Genre = sequelize.define('genre', {
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
	});

	return Genre;
}