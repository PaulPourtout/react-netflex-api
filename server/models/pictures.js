module.exports = (sequelize, DataTypes) => {
	const Picture = sequelize.define('picture', {
		title: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.TEXT
		},
		duration: {
			type: DataTypes.STRING
		},
	});

	return Picture;
}