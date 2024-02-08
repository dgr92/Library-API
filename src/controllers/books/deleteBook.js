const { db } = require('../../database/firebase');

const deleteBook = async (req, res) => {
  const { id } = req.params;

  const bookData = await db.collection('libros').doc(id).get();
  const book = bookData.data();

  if (!book) {
    return res.status(404).send({
      status: 'Error 404',
      message: 'Book not found',
    });
  }

  await db.collection('libros').doc(id).delete();

  res.status(200).send({
    status: 'OK',
    message: 'Book deleted',
    data: book,
  });
};

module.exports = deleteBook;
