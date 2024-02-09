// LLAMADA A API LOCAL
document.getElementById("pokemon").addEventListener("click",()=>{
    getPokemon()
})


async function getPokemon() {
    try {
        const pokemon_id= document.getElementById("id").value;

        let url = `http://localhost:3000/pokemon?id=${pokemon_id}`

        const params= {
            headers: {"Content-type": "application/json"}, 
            method: "GET" 
        }

        const data = await fetch(url, params);
        const result = await data.json();

        console.log(result.res)

        document.getElementById("nombre").innerHTML= result.res.name
        document.getElementById("image").src = result.res.image
    }
    catch(error) {
        console.log(error)
    }
}

