import express from "express"
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello world !!!")
})
app.get("/usuario", (req, res) => {
    res.json({
        nome: "joao",
        Idade: 25,
        cidade: "bota fogo"
    });
})
app.get("/usuario1", (req, res) => {
    res.json({
        nome: "davi",
        Idade: 17,
        cidade: "Natal rn"
    });
})

//rota get com status http 
app.get('/status', (req, res) => {
    res.status(200).send("Tudo OK!")
})
app.get('/erro', (req, res) => {
    res.status(500).send({
        erro: "erro interno do servidor"
    })
})
app.get("/usuario/:id", (req, res) =: {
    const { id } = req.params;
    res.status(200).json({
        id: id,
        nome: "user exemplo"
    })
})

app.listen(port, () => {
    console.log(`aplicação rodando e http://localhost:${port}`)
})