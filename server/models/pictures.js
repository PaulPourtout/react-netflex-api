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

	// Picture.sync({ force: true }).then(() => {
	// force: true will drop the table if it already exists
	// Picture.sync().then(() => {
	// 	// Table created
	// 	return Picture.create({
	// 		title: "Terminator",
	// 		image: "http://www.blastr.com/sites/blastr/files/3-31%20Lead.jpg",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!",
	// 		duration: "2h20",
	// 	})
	// });
	// });
	return Picture;
}