import { UsuarioController } from "../controller/UsuarioController.js";
import express from "express"

const router = express.router()

router.get("/", UsuarioController.listarUsuarios)
router.get("/", UsuarioController.criarUsuario)

export default router;