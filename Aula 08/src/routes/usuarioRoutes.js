import { UsuarioController } from "../controller/usuarioController.js";
import express from "express"
import { usuarios } from "../data/banco.js";

const router = express.Router()

router.get("/", UsuarioController.ListarUsuarios)

router.post("/", UsuarioController.CriarUusario)

router.post("/login", UsuarioController.Login)

router.get("/:id", UsuarioController.buscarId)

router.delete("/:id", UsuarioController.deletarUsuario)

router.put("/:id", UsuarioController.atualizarUsuario)
export default router