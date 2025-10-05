import express from "express"
import {
    alterarProdutoPorIdController, buscarProdutoPorNomeController,
    criarProdutoController, deletarProdutoPorIdController, listarProdutoPorIdController,
     listarProdutosCategoriaController, listarProdutosController
} from "../controllers/produtoController.mjs";
import { verificarAlterarProduto, verificarCriacaoProduto, verificarDeletarProduto, verificarListarProduto, verificarListarProdutoPorNome, verificarListarProdutosCategoria } from "../middlewares/produtoMiddleware.mjs";

export const productRouter = express.Router();

productRouter.get("/", listarProdutosController);
productRouter.get("/:id",verificarListarProduto, listarProdutoPorIdController);
productRouter.get("/nome/:nome",verificarListarProdutoPorNome, buscarProdutoPorNomeController);
productRouter.get("/categoria/:categoria",verificarListarProdutosCategoria, listarProdutosCategoriaController);

productRouter.post("/",verificarCriacaoProduto, criarProdutoController);

productRouter.delete("/:id",verificarDeletarProduto, deletarProdutoPorIdController);

productRouter.put("/:id",verificarAlterarProduto, alterarProdutoPorIdController);
