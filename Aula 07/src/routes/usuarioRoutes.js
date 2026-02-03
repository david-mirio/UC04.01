import { UsuarioController } from "../controller/usuarioController.js";
import express from "express"

const router = express.Router()

router.get("/", UsuarioController.ListarUsuarios)
router.post("/", UsuarioController.CriarUusario)
router.post("/login", UsuarioController.Login)

export default router