import express from "express"
import {
    alterarUsuarioPorIdController, criarUsuarioController, deletarUsuarioController,
    encontrarUsuarioPorIdController, listarUsuariosController
} from "../controllers/usuarioController.mjs";


export const userRouter = express.Router();

userRouter.get("/", listarUsuariosController);
userRouter.get("/:id", encontrarUsuarioPorIdController);
// buscar usuario por nome**

userRouter.post("/", criarUsuarioController);

userRouter.delete("/:id", deletarUsuarioController);
userRouter.put("/:id", alterarUsuarioPorIdController);
