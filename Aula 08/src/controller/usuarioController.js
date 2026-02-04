import { UsuarioModel } from "../models/usuarioModels.js";
import bcrypt from "bcrypt";
import {v4 as uuidv4} from 'uuid'
import { usuarios } from "../data/banco.js";
import jwt from "jsonwebtoken";


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
  
}
 const token = jwt.sign(
        {id: usuario.id, email:usuario.email, nome: usuario.nome},

        process.env.JWT_SECRET, // chave para assinar o token
        {expiresIn: "1h"}
    )       
res.status(200).json({msg: "login realizado com sucesso", usuario: usuario.nome})
   
      
} catch (error) {
             res.status(500).json({msg: "erro interno ao criar usuario", erro: error.message})
    
   

}
    }
    

    static buscarId(req, res){
        try {
            const {id} = req.params
            const usuario = UsuarioModel.buscarId(id)
            if(!usuario){
                res.status(404).json({msg: "nenhum usuario encontarado com esse id"})
                return
            } res.status(200).json({msg: "usuario encontrado", usuario})
        } catch (error) {
           res.status(500).json({msg: "erro interno ao buscar usuario por id", erro: error.message}) 
        }
    }
    static deletarUsuario(req, res){
        try {
            const {id} = req.params
            const deletar = usuarioModel.deletarUsuario(id)
            if(!usuarios){
                res.status(404).json({msg: "usuario não encontrado"})
                return
            } res.status(200).json({msg: "usuario deletado com sucesso"})
        } catch (error) {
              res.status(500).json({msg: "erro interno ao deletar usuario", erro: error.message}) 
        }
    }
    static async atualizarUsuario(req, res){
        try {
            const {id} = req.params
const {nome, email, senha} = req.body
if(!nome || email || senha){
    res.status(404).json({msg: "todos os campos devem ser prenchidos"})
return
}
const senhaHash = await bcrypt.hash(senha, parseInt(process.env.SALT))
const novosDados = {

    id: id,
    nome: nome,
    email: email,
    senha: senhaHash


}
const usuarioAtualizado = usuarioModel.atualizarUsuario(id, novosDados)

if(!usuarioAtualizado){
    res.status(404).json({msg: "usuario não encontrado"})
}        } catch (error) {
            res.status(500).json({msg: "erro interno ao atualizar usuarioo", erro: error.message}) 
        }
    }
    static async AtualizarParte(req, res){
try {
    const {Id} = req.params
    const campos = {...req.body} // pode conter nome,email,senha
    if(campos.senha){
        campos.senha = await bcrypt.hash(campos.senha, parseInt(process.env.SALT))
    }
} catch (error) {
     res.status(500).json({msg: "erro interno ao atualizar usuario", erro: error.message}) 
}
    }
}
