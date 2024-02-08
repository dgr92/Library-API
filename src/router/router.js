const express = require('express');
const router = express.Router();

const {
  seeBooksList,
  searchBook,
  createNewBook,
  updateBook,
  deleteBook,
} = require('../controllers/books/');

router.get('/books', seeBooksList);
router.get('/books/:id', searchBook);
router.post('/books', createNewBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
