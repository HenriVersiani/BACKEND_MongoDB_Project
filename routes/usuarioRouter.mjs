import express from "express"
import {
    alterarUsuarioPorIdController, criarUsuarioController, deletarUsuarioController,
    encontrarUsuarioPorIdController, encontrarUsuarioPorNomeController, listarUsuariosController
} from "../controllers/usuarioController.mjs";
import { verificarAlterarUsuario, verificarCriacaoUsuario,  verificarDeletarUsuário, verificarEncontrarUsuarioId, verificarEncontrarUsuarioNome } from "../middlewares/usuarioMiddleware.mjs";



export const userRouter = express.Router();

userRouter.get("/", listarUsuariosController);
userRouter.get("/:id",verificarEncontrarUsuarioId, encontrarUsuarioPorIdController);
userRouter.get("/nome/:nome",verificarEncontrarUsuarioNome, encontrarUsuarioPorNomeController)

userRouter.post("/",verificarCriacaoUsuario,  criarUsuarioController);

userRouter.delete("/:id",verificarDeletarUsuário, deletarUsuarioController);
userRouter.put("/:id",verificarAlterarUsuario, alterarUsuarioPorIdController);
