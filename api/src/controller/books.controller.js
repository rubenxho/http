
// GENERO LAS FUNCIONES PARA LOS ENDPOINTS.
const axios = require("axios")
const Book = require("../models/books");

// let books = null;
let books = [
    {
      id_libro: 1,
      id_usuario: 0,
      titulo: "Alas de Sangre",
      tapa: "Belic",
      autor: "Rebecca Yarros",
      precio: 21.75,
      photo: "../../../assets/imagen/perfil.jpg",
    },
    {
      id_libro: 2,
      id_usuario: 0,
      titulo: "Maldita Roma",
      tapa: "Historic",
      autor: "Santiago Posteguillo",
      precio: 23.65,
      photo: "../../../assets/imagen/perfil.jpg",
    }
]

function welcome (req, res) {
    res.send("Bienvenido")
}



function getBooksOrID(req, res) {

    let response;

    const bookId = parseInt(req.query.id_libro);
    if (bookId) {
        const book = books.find((b) => b.id_libro === parseInt(bookId));
        if (!book) {
            response = { error: true, code: 200, message: `No existe el libro con el id: ${req.query.id_libro}` }
            res.send(response)
        }
        response = book;
    } else {
        if (books) {
            response = books;
        } else {
            response = { error: true, code: 200, message: "No hay ningún libro" }
            res.send(response)
        }
        response = books;
    }
    res.send(response)
}



function createNewBook(req, res) {

    let response;

    if (books) {
        const newBook = req.body;
        books.push(newBook);
        response = { error: false, code: 200, message: "Libro añadido correctamentea a tu lista", books }
    } else {
        response = { error: false, code: 200, message: "Libro añadido correctamentea a tu lista vacía", books }
    }
    res.send(response)
}



function updateBook(req, res) {

    let response;

    const bookId = parseInt(req.query.id_book);
    const updatedBook = req.body;
    const index = books.findIndex((b) => b.id_book === bookId);
    if (index === -1) {
        response = { error: true, code: 200, message: `No existe ningún libro con el id: ${req.query.id_book} para modificar` }
    } else {
        books[index] = updatedBook;
        response = { error: false, code: 200, message: `El libro con el id: ${req.query.id_book} se ha modificado correctamente`, books }
    }
    res.send(response)
}



function deleteBook(req, res) {

    let response;

    const bookId = parseInt(req.query.id_libro);
    const index = books.findIndex((b) => b.id_libro === bookId);
    if (index === -1) {
        response = { error: true, code: 200, message: `No existe ningún libro con el id: ${req.query.id_libro} para eliminar` };
    } else {
        books.splice(index, 1);
        response = { error: false, code: 200, message: `El libro con el id: ${req.query.id_libro} se ha eliminado correctamente`, books }
    }
    res.send(response)
}

async function getPokemon(request,response){   
        const id= request.query.id
        const url=`https://pokeapi.co/api/v2/pokemon/${id}`

        try {
            const data = await axios.get(url);

            console.log(data)

            const res = {
                name: data.data.name,
                image: data.data.sprites.front_default
            }

            response.send({ error: false, code: 200, res })
        }
        catch(error) {
            console.log(error)
            response.send({ error: true, code: 400})
        }
}

module.exports = {welcome, getBooksOrID, createNewBook, updateBook, deleteBook, getPokemon}














// FUNCIONES GET CON ENDPOINT POR SEPARADO

// function getBooks(req, res) {

//     let response;

//     if(books) {
//         response = books;
//     } else {
//         response = { error: true, code: 200, message: "No hay ningún libro" }
//     }
//     res.send(response)
// }



// function getBookQuery(req, res) {

//     let response;

//     const bookId = parseInt(req.query.id_book);
//     const book = books.find((b) => b.id_book === bookId);

//     if (book) {
//         response = book;
//     } else {
//         response = { error: true, code: 200, message: `No existe el libro con el id: ${req.query.id_book}` }
//     }
//     res.send(response)
// }