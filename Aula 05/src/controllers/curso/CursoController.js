import { CursoModel } from "../curso/CursoModel.js";

export class cursoController{

    static listarCurso(req, res){
        try {
            const cursos = CursoModel.listarCurso()
            if(cursos.lenght === 0 || !cursos){
                res.status(400).json({msg: "nenhum curso cadastrado no banco"})
            return
            }
    
     res.status(200)({msg: "Cursos encontrados.", cursos})
        }
    
        catch (error) {
        res.status(500)({msg: "eroo interno ao listar os cursos", erro: error.mesagem})
        }

    }
}