import express from "express";
import "dotenv/config";
import cursoRoutes from "./src/routes/curso/cursosRoutes.js"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/cursos", cursoRoutes) 

app.get("/", (req, res) =>{
    res.status(200).send(`${process.env.get}`) 
})

app.listen(PORT, ()=>{
    console.log(`aplicação rodando em http://localhost:${PORT}`)
})