const { db } = require('../../database/firebase');

const createNewBook = async (req, res) => {

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
