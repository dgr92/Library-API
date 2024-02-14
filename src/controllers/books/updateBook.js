const { db } = require('../../database/firebase');

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, editorial, pages, isbn13, avaiable } = req.body;

  const bookData = await db.collection('libros').doc(id).get();
  const book = bookData.data();

  if (!book) {
    return res.status(404).send({
      status: 'Error 404',
      message: 'Book not found',
    });
  }

  const updatedBook = {
    title: title || book.title,
    author: author || book.author,
    editorial: editorial || book.editorial,
    pages: pages || book.pages,
    isbn13: isbn13 || book.isbn13,
    avaiable: avaiable,
  };

  await db.collection('libros').doc(id).update(updatedBook);

  res.status(200).send({
    status: 'OK',
    message: 'Book updated',
    data: {
      oldData: book,
      updatedData: updatedBook,
    },
  });
};

module.exports = updateBook;
