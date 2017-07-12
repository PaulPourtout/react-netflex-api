module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		last_login: {
			type: DataTypes.DATE
		},
		status: {
			type: DataTypes.ENUM('active', 'inactive'),
			defaultValue: 'active'
		},
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		}
	});

	// User.sync({ force: true }).then(() => {
	// 	//force: true will drop the table if it already exists
	// 	User.sync().then(() => {
	// 		// Table created
	// 		return User.create({
	// 			name: "admin",
	// 			password: "mdp",
	// 			email: "admin@admin.com",
	// 			admin: true,
	// 		});
	// 	});
	// });

	return User;
}