import express from "express"
import alunoRoute from "./src/routes/aluno/AlunoRoutes.js"
const app = express()
const port = 3000

app.use("/aluno", alunoRoute);

app.get("/", (req, res) => {
    res.send("Hello world !!!")
})

app.listen(port, ()=>{

console.log(`aplicação rodando em http://localhost:${port}`)
})