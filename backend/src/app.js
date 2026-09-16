const express = require("express");
const cors = require("cors");

const app = express();

//Permite las peticiones desde otros origenes
app.use(cors());

//Permite recibir datos en formato json
app.use(express.json());

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
})