import { UsuarioModel } from "../models/usuarioModels.js";
import bcrypt from "bcrypt";
import {v4 as uuidv4} from 'uuid'
import { usuarios } from "../data/banco.js";

export class UsuarioController{
    static ListarUsuarios(req, res){
        try {
            const usuarios = UsuarioModel.listarUsuarios()
            if(!usuarios || usuarios.length === 0){
                res.status(404).json({msg: "nenhum usuario encontrado"})
            }
            res.status(200).json({msg: "usuario encontrados", usuarios})
        } catch (error) {
            res.status(500).json({msg: "erro interno ao listar usuarios", erro: error.message})
        }
    }
static async CriarUusario(req, res){

    try {
        const {nome, email, senha} = req.body
        if(!nome || !email || !senha){
            res.status(400).json({msg: "todos os dados devem ser prenchidos"}
            )
            return
        }
        const senhaHash  = await bcrypt.hash(senha,parseInt(process.env.SALT))
const novoUsuario ={
    id: uuidv4(),
    nome: nome,
    email: email,
    senha: senhaHash
}
const usuarioCriado = UsuarioModel.criarUsuarios(novoUsuario)
if(usuarioCriado){
res.status(201).json({msg: "usuario criado com sucesso", usuarioCriado})
}
    } catch (error) {
        res.status(500).json({msg: "erro interno ao criar usuario", erro: error.message})
    }

}
static async Login(req, res){

        try {
            const {email, senha} = req.body
            if(!email || !senha){
                req.status(400).json({msg: "Todos os dados devem ser prenchidos"})
                return
            }
            const usuario = UsuarioModel.listarUsuarios().find(u => u.email === email)
           if(!usuario){
res.status(400).json({msg: "emal ou senha invalido"})
return           
}
const senhaValida = await bcrypt.compare(senha, usuario.senha)
if(!senhaValida){
    res.status(400).json({msg: "emal ou senha invalido"})
    return
} res.status(200).json({msg: "login realizado com sucesso", usuario: usuario.nome})
        } catch (error) {
             res.status(500).json({msg: "erro interno ao criar usuario", erro: error.message})
        }
    }
}
