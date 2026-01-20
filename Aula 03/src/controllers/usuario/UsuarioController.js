
import { UsuarioModel } from "../../models/usuario/UsuarioModel.js";

export class UsuarioController{

    static listarUsuarios(req, res){
        try {
            const usuario = UsuarioModel.listarTodos()
            if(usuario.legth === 0){ 
                res.status(400).json({msg: "nenhum usuario no banco"})

            }
            res.status(200).json({msg: "usuarios encontrados", usuario});
        } catch (error) {
            res.status(500).json ({msg: "erro interno ao listar os usuarios", error: error.message})
        }
    }

    static ListarUm(req, res){
        try {
            const {id} = req.params;
            if(!id){
                res.status(400).json({msg: "o id não foi informado"})
            return;
        }
        const usuario = UsuarioModel.buscarPorId(id)
        if(!usuario){
            res.status(404).json({msg: "nenhum usuario pertece a este id"})
            return;
        }
        res.status(200).json({msg: "usuario encontrado"})
        } catch (error) {
            res.status(500).json ({msg: "erro interno ao buscar o usuario", error: error.message})
        }
    }
}