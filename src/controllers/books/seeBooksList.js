const { db } = require('../../database/firebase');

const seeBooksList = async (_req, res) => {
  const bookListData = await db.collection('libros').get();

  const books = bookListData.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).send({
    status: 'OK',
    message: 'Books list',
    data: books,
  });
};

module.exports = seeBooksList;
