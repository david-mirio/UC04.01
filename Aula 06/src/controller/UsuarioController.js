import { UsuarioModel } from "../models/UsuarioModel.js";
import axios from "axios";
export class UsuarioController{

    static listarUsuarios(req, res){
        try {
            const usuarios = usuariosModel.listarUsuarios();
            if(!usuarios || usuarios.length === 0){
                res.status(404);JSON({msg: "nenhum usuario cadastrado!"});
                return
            }
            res.status(200).json({msg: "usuarios encontrados", usuarios})
        } catch (error) {
            res.status(500).json({msg: "erro interno ao listar usuarios", erro: error.mesagem})
        }
    }

    //função assicrona para busca os dosados do viacep

    static async criarUsuario(req, res){
try {
    const {nome,email,telefone,cep} = req.body;
    if(!nome || !email || !telefone || !cep
    ){
        res.status(400).json({msg: "todos os campos devem ser preenchidos"})
    return
    }
    const BuscaCep = await axios.get(`viacep.com.br/ws/${cep}/json/`)
    if(BuscaCep.erro){
        res.status(400).json({msg: `cep invalido`})
    }
    const novoUsuario = {
        id: Data.now(),
        nome: nome,
        emal: email,
        telefone: telefone,
        cep: cep,
        lograduro: BuscaCep.data.lograduro,
        uf: BuscaCep.data.uf
    }
    const userCriado = UsuarioModel.criarUsuario(novoUsuario);
    res.status(201).json({msg: " "})
} catch (error) {
    res.status(500).json({msg: "erro interno na busca do cep", erro: error.mesagem})
}
    }

    static async buscarId(req, res){
try {
    const {id} = req.params;
const {nome, email, telefone, cep} = req.body
if(!nome || !email || !telefone || !cep){
res.status(400).json({msg: "todos o scmapos devem ser preenchidos"})
return
}
const buscaCep = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
if(buscaCep.erro){
    res.status(400).json({msg: "CEP invalido"})
    return
}
console.log(buscaCep);
const dadosAtualizados = {
    nome: nome,
    email: email,
    telefone: telefone,
    cep: cep,
    lograduro: buscaCep.data.lograduro,
    uf: buscaCep.data.uf
}
const userAtualizado = UsuarioModel.AtulizarUsuario(id, dadosAtualizados)
if(!userAtualizado){
    res.status(404).json({msg: "usuario não enconrado!"})
    return
}
res.status(201).json({msg: "usuario atualizado com sucesso", AtulizarUsuario})
} catch (error) {
res.status(500).json({msg: "erro interno ao atualizar usuario", erro: error.mesagem})    
}
    }
    static deletarUsuario(req, res){
        try {
            const {id} = req.params
            const deletarUsuario = usuariosModel.deletarUsuario(id)
            if(!deletarUsuario){
                res.status(400).json({msg: "usuario não encontrado"})
                return
            }
        } catch (error) {
            res.status(500).json({msg: "erro interno ao deletar o usuario", erro: error.mesagem})
        }
    }
}
