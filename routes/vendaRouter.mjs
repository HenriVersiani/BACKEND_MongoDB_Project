import express from "express"
import {
    alterarVendaController,
    deletarVendasController,
    gerarVendaController,
    listarVendaporIdController,
    listarVendasController,
    listarVendaPorVendedorController,
    listarVendaPorProdutoController,
    listarVendaPorPagamentoController
} from "../controllers/vendaController.mjs"


export const vendaRouter = express.Router()

vendaRouter.get('/', listarVendasController)
vendaRouter.get('/:id', listarVendaporIdController)
vendaRouter.get('/vendedor/:id', listarVendaPorVendedorController)
vendaRouter.get('/produto/:id', listarVendaPorProdutoController)
vendaRouter.get('/pagamento/:metodoPagamento', listarVendaPorPagamentoController)

vendaRouter.post('/', gerarVendaController)

vendaRouter.put('/:id', alterarVendaController)

vendaRouter.delete('/:id', deletarVendasController)