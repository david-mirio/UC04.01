import { cursos } from "../../data/curso.data.js";
import { aluno } from "../../../../Aula 04/src/data/Banco.js";
export class CursoModel {

    static ListarCursos() {
        return cursos;
    }
    static buscarCursoId(id) {
        return cursos.find(u => u.id) === parseInt(id)
    }
    static criarCurso(nome) {
        const NovoCurso = {
            id: cursos.length + 1,
            nome: nome
        }
        cursos.push(NovoCurso)
        return NovoCurso
    }
    static atualizarCurso(id, nome) {
        const index = cursos.findIndex(u => u.id === parseInt(id))
        if (id === -1) {
            return false
        }
        cursos[index] = {
            id: id,
            nome: nome
        }
        return cursos[index];
    }
    static deletarCurso(id) {
        const index = cursos.findIndex(u => u.id === parseInt(id))
        if (id === -1) {
            return false
        }
        cursos.splice(index, 1);
        return true;

    }
    // se curso conter alunos exibir mesagem de erro comom "não pode deletar enquanto porta alunos"
    // if(){

    // }
    static ListarAlunosPorCurso(idCurso) {
        return alunos.filter(a => a.idCurso === parseInt(idCurso))
    }
    //if caso o curso listado não exista retornar como falso ? dar pra colocar mesagem no model papo não lembro, dar, mas as  messagens sao mais usadas no controller, afinal model é pra tipo modelar sapoha

}