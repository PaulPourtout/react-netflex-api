module.exports = (db) => {
	const pictures = {
		getAll: (req, res) => {
			db.Picture.findAll({
				include: [
					{ model: db.Genre, as: 'Genre' },
				]
			})
				// db.Picture.findAll()
				.then(pictures => res.send(pictures))
				.catch(err => console.log('error :', err));
		},

		getOne: (req, res) => {
			db.Picture.findOne({ where: { id: req.params.id } })
				.then(picture => res.send(picture))
				.catch(err => console.log('error :', err));
		},

		addOne: (req, res) => {
			db.Picture.create({
				title: req.body.title,
				image: req.body.image,
				description: req.body.description,
				duration: req.body.duration,
				genres: req.body.genres,
			},
				{
					include: [{
						model: db.Genre,
						as: 'Genre'
					}]
				})
				.then(picture => res.send(picture))
				.catch(err => console.log('error :', err));
		},

		deleteOnePicture: (req, res) => {

		}

	}

	return pictures;
}
