import { json } from "express"
import { UsuarioModel } from "../../../../Aula 03/src/models/usuario/UsuarioModel.js"
import { AlunoModel } from "../../models/aluno/AlunoModels.js"
import { usuario } from "../../../../Aula 03/src/data/Banco.js"


export class ALunoController {

    static listarTodos(req, res) {

        try {
            const Aluno = AlunoModel.ListarTodos()

            if (Aluno.length === 0) {
                res.status(404).json({ msg: "nenhum usuario encontrado " })
            }
            res.status(200).json({ msg: "Usuarios encontrados", aluno })
        } catch (error) {
            res.status(404).json({ msg: "erro na listagem de usuarios", error: error.messagem })
        }
    }

    static listarUm(req, res) {
        try {
            const {id} = req.params

            if (!id) {
                res.status(400).json({ msg: "nenhum id informado" })
                return
            }

            const aluno = AlunoModel.BuscarId(id)
            res.status(200).json({ msg: "Usuario buscado ", aluno })
        } catch (error) {
            res.status(404).json({ msg: "erro interno na busca do id", error: error.messagem })
        }

    }
    static criarAluno(req, res) {
        try {
            const {nome,idade,matricula,id,curso} = req.body
            if (idade < 16) {
                res.status(400).json({ msg: "idade minima de 16 anos" })
                return
            }
const matriculaUnica = matricula.find(m => m.matricula === matricula )
        if(matriculaUnica){
            res.status(400).json({msg: "matricula ja existente"})
            return
        }
        } catch (error) {
res.status(404).json({msg: "erro interno na matricula", error: error.messagem})
        }
    }
static atualizarAluno(req, res){
try {
    const {id} = req.params
    const {nome,idade,matricula,curso} = req.body
if(!nome || !idade || !matricula || !curso){
    res.status(400).json({msg: "todos os campos devem ser prenchidos"})
    return
}if(!id){
     res.status(400).json({msg: "nenhum id encontrado"})
     return
}
const NovoUsuario = UsuarioModel.atualizarAluno(id, nome, matricula, curso, idade)
          res.status(201).json({msg: "Usuário atualizado com sucesso!", novoUsuario});
} catch (error) {
    res.status(404).json({msg: "erro interno na atualização", error: error.messagem})
}
}
static deletarAluno(req, res){
    try {
        const {id} = req.params
        if(!id){
            res.status(400).json({msg: "Id não informado"})
            return
        }
        const deletarAluno = UsuarioModel.deletarUsuario(id)
            if(!usuario){
res.status(400).json({msg: "usuario não informado para deletar"})
return
            }
                      res.status(200).json({msg: "Usuário deletado com sucesso!",});
        
    } catch (error) {
         res.status(500).json({msg:"Erro interno ao deletar o usuário", erro: error.message});
    }
}
}