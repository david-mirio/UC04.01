// import express from "express";
// import { UsuarioController } from "../../controllers/usuario/UsuarioController.js";

// const router = express.Router();



// router.get("/", UsuarioController.listarUsuarios);
// router.get("/:id", UsuarioController.ListarUm)

// export default router;

import express from "express";
import { ALunoController } from "../../controllers/aluno/AlunoController.js";

const router = express.router()

router.get("/", ALunoController.listarTodos)
router.get("/:id", ALunoController.listarUm)