import express from "express"
import { alterarVendaController, deletarVendasController, gerarVendaController,    listarVendaporIdController,    listarVendasController,  listarVendasPorVendedorController } from "../controllers/vendaController.mjs"


export const vendaRouter = express.Router()

vendaRouter.get('/', listarVendasController )
vendaRouter.get('/:id', listarVendaporIdController)
vendaRouter.get('/:id', listarVendasPorVendedorController)

vendaRouter.post('/', gerarVendaController)

vendaRouter.put('/:id', alterarVendaController)

vendaRouter.delete('/:id', deletarVendasController)