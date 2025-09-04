import express from "express"
import {
    alterarProdutoPorIdController, buscarProdutoPorNomeController,
    criarProdutoController, deletarProdutoPorIdController, listarProdutoPorIdController,
     listarProdutosCategoriaController, listarProdutosController
} from "../controllers/produtoController.mjs";

export const productRouter = express.Router();

productRouter.get("/", listarProdutosController);
productRouter.get("/:id", listarProdutoPorIdController);
productRouter.get("/:id", buscarProdutoPorNomeController);
productRouter.get("/:id", listarProdutosCategoriaController);

productRouter.post("/", criarProdutoController);

productRouter.delete("/:id", deletarProdutoPorIdController);

productRouter.put("/:id", alterarProdutoPorIdController);
