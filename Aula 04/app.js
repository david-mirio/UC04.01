import express from "express"
import usuarioRoutes from "./src/routes/usuario/usuarioRoutes.js"
const app = express()
const port = 3000

app.use("/usuarios", usuarioRoutes);

app.get("/", (req, res) => {
    res.send("Hello world !!!")
})

app.listen(port, ()=>{

console.log(`aplicação rodando em http://localhost:${port}`)
})