// import express from "express";
// import { UsuarioController } from "../../controllers/usuario/UsuarioController.js";

// const router = express.Router();



// router.get("/", UsuarioController.listarUsuarios);
// router.get("/:id", UsuarioController.ListarUm)

// export default router;

import express from "express";
import { ALunoController } from "../../controllers/aluno/AlunoController.js";

const router = express.Router()

router.get("/", ALunoController.listarTodos)
router.get("/:id", ALunoController.listarUm)
router.post("/", ALunoController.criarAluno)
router.put("/:id", ALunoController.atualizarAluno)
router.delete("/:id", ALunoController.deletarAluno)

export default router;