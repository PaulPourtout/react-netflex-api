module.exports = (sequelize, DataTypes) => {
	const CrewMember = sequelize.define('crew_member', {
		name: { type: DataTypes.STRING },
	});


	// CrewMember.sync({ force: true }).then(() => {
	// 	//	force: true will drop the table if it already exists
	// 	CrewMember.sync().then(() => {
	// 		// Table created
	// 		return CrewMember.create({
	// 			name: "jean-mi"
	// 		});
	// 	});
	// });

	return CrewMember;
}