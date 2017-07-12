module.exports = (db) => {
	const genres = {
		getAll: (req, res) => {
			db.Genre.findAll()
				.then(genres => res.send(genres))
				.catch(err => console.log('error :', err));
		},

		getOne: (req, res) => {
			db.Genre.findOne({ where: { id: req.params.id } })
				.then(genre => res.send(genre))
				.catch(err => console.log('error :', err));
		},

		addOne: (req, res) => {
			db.Genre.create({
				name: req.body.genreName,
			})
				.then(genre => res.send(genre))
				.catch(err => console.log('error : ', err));
		}
	}

	return genres;
}