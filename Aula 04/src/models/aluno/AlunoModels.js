import { aluno } from "../../data/Banco.js";

export class AlunoModel {

    static ListarTodos() {
        return aluno;
    }

    static BuscarId(id) {
        return aluno.find(u => u.id === parseInt(id))
    }

    static CriarAluno(nome, idade, curso, matricula) {
        const NovoAluno = {
            id: aluno.legth + 1,
            nome: nome,
            idade: idade,
            curso: curso,
            matricula: matricula,
        };

        aluno.Push(NovoAluno)
        return NovoAluno




    }
    static atualizarAluno(nome, idade, curso, matricula,) {
        const index = aluno.findIndex(u => u.id === parseInt(id))
        aluno[index] = {

            id: parseInt(id),
            nome: nome,
            idade: idade,
            curso: curso,
            matricula: matricula,

        }

        


    }

//     app.delete("/habitos/:id", (req, res) => {
//   const id = Number(req.params.id);
//   habitos = habitos.filter(h => h.id !== id);
static deletarAluno(id) {
        const index = Aluno.findIndex(u => u.id === parseInt(id))
        if (index === -1) {
            return false
        }
        usuario.splice(index, 1)
        return true;
    }

} 