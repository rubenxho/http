
// CREO SERVIDOR EXPRESS

const express = require('express');
const cors = require('cors');
const booksRoutes = require('./router/books.router');


const app = express();

app.set('port', 3000);
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(booksRoutes)

module.exports = app;