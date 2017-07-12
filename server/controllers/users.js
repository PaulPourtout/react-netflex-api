module.exports = (db) => {
	const users = {
		getAll: (req, res) => {
			db.User.findAll()
				.then(users => res.send(users))
				.catch(err => console.log('error :', err));
		},
		getOne: (req, res) => {
			db.User.findOne({ where: { id: req.params.id } })
				.then(user => res.send(user))
				.catch(err => console.log('error :', err));
		},
		addOne: (req, res) => {
			db.User.create({
				name: req.body.name,
				password: req.body.password,
				email: req.body.email
			})
				.then(user => res.send(user))
				.catch(err => console.log('error :', err));
		}
	}

	return users;
}