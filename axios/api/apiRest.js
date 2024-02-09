const express =require("express");
const cors = require("cors")
const axios = require("axios")
const app =  express();

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variable grobal
let port=3000;

// AXIOS CONEXION A API EXTERNA
app.get("/pokemon",
    async function(request,response)
    {   
        const id= request.query.id
        const url=`https://pokeapi.co/api/v2/pokemon/${id}`

        try {
            const data = await axios.get(url)
            const res = {
                name: data.data.name,
                image: data.data.sprites.front_default
            }
            response.send({ error: false, code: 200, res })
        }
        catch(error) {
            response.send({ error: true, code: 400})
        }
    }
);

app.listen(port,"localhost",()=>{
    console.log("Serve on! port: "+ port)
})