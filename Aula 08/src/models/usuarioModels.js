import { usuarios } from "../../../Aula 07/src/data/banco.js";


export class UsuarioModel{

    static listarUsuarios(){
        return usuarios
    }
    static buscaId(id){
        return usuarios.find(u => u.id === id)
    }
    static criarUsuarios(usuario){
        usuarios.push(usuario)
        return usuario
    }
    static atualizarUsuario(id, novosDados){
        const index = usuarios.findIndex (u => u.id === id)
        if( index===-1){
            return false
        } 
        usuario[index] = {...usuarios[index], ...novosDados}
    return true
    }
    static deletarUsuario(id){
        const index = usuraio.findIndex (u => u.id === id)
    if(index === -1){
        return false
    }
   usuarios.splice(index, 1);
   return true
    }

    
}