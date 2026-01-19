import express from "express"
const app = express()
const port = 3000

let habitos = []
let Atual = 1


let idAtual = 1
let nome = "Davi"
l

app.post("/habitos", (req, res) => {
    if (!nome || !frequencia) {
        return res.status(400).json({ erro: "nome e frequencia são obrigatorios" });
    }
    const NewHabito = {
        id: idAtual++,
        nome,
        frequencia,
        concluido: false,
    } 
    habitos.push(novoHabito);
    res.status(201).json(novoHabito);
});
app.get("/habitos", (req, res) => {
  res.json(habitos);
});
app.patch("/habitos/:id/concluir", (req, res) => {
  const id = Number(req.params.id);
  const habito = habitos.find(h => h.id === id);

  if (!habito) {
    return res.status(404).json({ erro: "Hábito não encontrado" });
  }

  habito.concluido = true;
  res.json(habito);
});
app.put("/habitos/:id", (req, res) => {
  const id = Number(req.params.id)
  const { nome, frequencia } = req.body

  const habito = habitos.find(h => h.id === id)
  if (!habito) {
    return res.status(404).json({ erro: "Hábito não encontrado" });
  }

  habito.nome = nome ?? habito.nome;
  habito.frequencia = frequencia ?? habito.frequencia;

  res.json(habito);
});
app.delete("/habitos/:id", (req, res) => {
  const id = Number(req.params.id);
  habitos = habitos.filter(h => h.id !== id);

  res.status(204).send();
});
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});

