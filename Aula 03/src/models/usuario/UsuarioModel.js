import { usuario } from "../../data/Banco.js";

export class UsuarioModel {

    static listarTodos() {
        return usuario;
    }
    static buscarPorId() {

        return usuario.find(u => u.id === parseInt(id));

    }
    static criarUsuario(nome, email, telefone) {
        const NovoUsuario = {
            id: usuario.length + 1,
            nome: nome,
            email: email,
            telefone: telefone,
        };

        usuario.push(NovoUsuario)
        return NovoUsuario;

    }

    static atualizarUsuario(id, nome, email, telefone) {
        const index = usuario.findIndex(u => u.id === parseInt(id))
        usuario[index] = {
            id: parseInt(id),
            nome: nome,
            email: email,
            telefone: telefone,
        }
        return usuario[index];
    } static deletarUsuario(id) {
        const index = usuario.findIndex(u => u.id === parseInt(id))
        if (index === -1) {
            return false
        }
        usuario.splice(index, 1)
        return true;
    }
}