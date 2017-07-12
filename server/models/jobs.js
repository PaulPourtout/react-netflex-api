module.exports = (sequelize, DataTypes) => {
	const Job = sequelize.define('job', {
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
	});

	// Job.sync({ force: true }).then(() => {
	// //force: true will drop the table if it already exists
	// Job.sync().then(() => {
	// 	// Table created
	// 	return Job.create({
	// 		name: "actor"
	// 	});
	// });
	// });

	return Job;
}