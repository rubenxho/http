
// CREO ENDPOINTS DE LAS RUTAS.

const { Router } = require('express');
const router = Router();
const booksController = require("../controller/books.controller")

router.get('/', booksController.welcome);

router.get('/books', booksController.getBooksOrID);

router.post('/books', booksController.createNewBook);

router.put('/books', booksController.updateBook);

router.delete('/books', booksController.deleteBook);

router.get('/pokemon', booksController.getPokemon);

module.exports = router;