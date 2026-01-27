import { cursoController } from "../../controllers/curso/cursoController.js";
import express from "express"

const router = express.Router()

router.get("/", cursoController.listarCurso);


export default router