import { usuarios } from "../data/banco.js";

export class UsuarioModel{

    static ListarUsuarios(){ 
    return usuarios
}

static BuscarPorId(id){
    return usuarios.find(u => u.id === parseInt(id))
}

static criarUsuario(usuario){
    usuario.push(usuario)
    return usuario;
}
static AtulizarUsuario(id, usuario){
    const index = usuarios.findIndex( u => u.id === parseInt(id))

    if(index===-1){
        return false;
    }
usuarios[index] = {...usuarios[index], ...novosDados};
return usuarios[index];
}
static deletarUsuario(id){
    const index = usuarios.findIndex(u=>  u.id === parseInt(id))
    if(index === -1){
        return false
    }
usuarios.splice(index, 1);
return true
}
}