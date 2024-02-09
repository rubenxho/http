import {Libro} from "./libro.js"

document.getElementById("agregar").addEventListener("click",()=>{
    addBook()
})

document.getElementById("mostrar").addEventListener("click",()=>{
    getBooks()
})

document.getElementById("borrar").addEventListener("click",()=>{
    deleteBooks()
})

async function getBooks() {
    try {
        
        let url = "http://localhost:3000/books"

        const params= {
            headers: {"Content-type": "application/json"}, 
            method: "GET" 
        }

        const data = await fetch(url, params);
        const result = await data.json();

        console.log(result)
    }
    catch(error) {
        console.log(error)
    }
}

async function addBook () {
    try {   
        const titulo= document.getElementById("title").value;
        const precio= document.getElementById("price").value;
        const id= Number(document.getElementById("id").value);

        const libro = new Libro(id,titulo, precio)

        let url ="http://localhost:3000/books"   
    
        let params= {
            headers: {"Content-type": "application/json"}, 
            body: JSON.stringify(libro), 
            method: "POST" 
        }
    
        const data = await fetch(url, params);
        const result = await data.json();

        console.log(result)
    }
    catch (error){
        console.log(error)
    }
}

async function deleteBooks () {
    try {   
        const id= document.getElementById("id").value;

        let url = `http://localhost:3000/books?id_libro=${id}`
    
        let params= {
            headers: {"Content-type": "application/json"},  
            method: "DELETE" 
        }
    
        const data = await fetch(url, params);
        const result = await data.json();

        console.log(result)
    }
    catch (error){
        console.log(error)
    }
}

// LLAMADA A API EXTERNA
document.getElementById("pokemon").addEventListener("click",()=>{
    getPokemon()
})


async function getPokemon() {
    try {
        const pokemon_id= document.getElementById("id").value;
        const pokemon_name= document.getElementById("name").value;
        
        let url = "https://pokeapi.co/api/v2/pokemon"

        if(pokemon_id !== ""){
            url += `/${pokemon_id}`
        }
        else{
            url += `/${pokemon_name}`
        }

        const params= {
            headers: {"Content-type": "application/json"}, 
            method: "GET" 
        }

        const data = await fetch(url, params);
        const result = await data.json();

        console.log(result)

        document.getElementById("nombre").innerHTML= result.name
        document.getElementById("image").src = result.sprites.front_default
    }
    catch(error) {
        console.log(error)

    }
}

