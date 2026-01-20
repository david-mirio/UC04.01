import express from "express";
import { UsuarioController } from "../../controllers/usuario/UsuarioController.js";

const router = express.Router();

//rota para listar todos os usuario

router.get("/", UsuarioController.listarUsuarios);
router.get("/:id", UsuarioController.ListarUm)

export default router;