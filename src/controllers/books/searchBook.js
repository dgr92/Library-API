const { db } = require('../../database/firebase');

const searchBook = async (req, res) => {
  const { id } = req.params;

  const bookData = await db.collection('libros').doc(id).get();
  const book = bookData.data();

  if (!book) {
    return res.status(404).send({
      status: 'Error 404',
      message: 'Book not found',
    });
  }

  res.status(200).send({
    status: 'OK',
    message: 'Book found',
    data: book,
  });
};

module.exports = searchBook;
