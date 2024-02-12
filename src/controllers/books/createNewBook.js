const { db } = require('../../database/firebase');

const createNewBook = async (req, res) => {
  if (
    !req.body.title ||
    !req.body.author ||
    !req.body.editorial ||
    !req.body.pages ||
    !req.body.isbn13
  ) {
    return res.status(400).send({
      status: 'Error',
      message: 'Insert all book data',
    });
  }

  req.body = {
    ...req.body,
    avaiable: true,
  };

  await db.collection('libros').add(req.body);

  res.status(200).send({
    status: 'OK',
    message: 'New book added',
    data: req.body,
  });
};

module.exports = createNewBook;
