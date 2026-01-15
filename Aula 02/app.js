import express from "express"
const app = express()
const port = 3000

app.use(express.json());
// banco de dados em memorias muito massa
let usuarios = [
    {
        id: 1,
        nome: "jerisvaldo",
        email: "picapau2004@gmail.com",
        telefone: "(84)9095-9432",
        ceep: "45763246"
    }
]

app.get("/", (req, res) => {

    res.status(200).send("hello world")

})
app.get("/api/usuario", (req, res) => {
    res.status(200).json({ "usuarios": usuarios });
})
app.get("/api/usuario/:id", (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === parseInt(id));
    if (!usuario) {
        res.status(404).json({ "msg": "usuario não encontrado", usuario })
    }
    res.status(200).json({ "msg": "usuario encontrado.", usuario })
})

app.post("/api/usuario", (req, res) => {
    const { nome, email, telefone } = req.body;
    if (!nome || !email || !telefone) {
        res.status(400).json({ "msg": "todos os campos devem ser preenchidos corretamente" });
        return
    }
    const NovoUsuario = {
        id:usuarios.length + 1,
        nome,
        email,
        telefone,
    }
usuarios.push(NovoUsuario);

res.status(201).json({"msg": "novo usuario cadastrado com sucesso",
    "usuario": NovoUsuario}

)
})


app.put("/api/usuario/:id", (req, res)=>{
    const {id} =req.params;
    const {nome, email, telefone} = req.body; 
    
})
if (!nome || !email || !telefone) {
        res.status(400).json({ "msg": "todos os campos devem ser preenchidos corretamente" });
        return
    }
    const index = usuario.findIndex(u => u.id === parseInt(id));
    if(index===-1){
        res.status(404).json({"msg": "nenhum usuario encontrado com este ID"})
        return;
    }
    usuario[index] = {
        id: id,
        nome: nome,
        email: email
    }

    res.status(200).json({

"msg": "usuario atualizado com sucesso",
"usuario": usuario[index]

    })
app.listen(port, () => {
    console.log(`aplicação rodando e http://localhost:${port}`)
})

   