
import e from "express"
import {
    alterarVendaPorIdService,
    deletarVendaPorIdService,
    gerarVendaService,
    listarVendaPorIdService,
    listarVendaPorMetodoPagamentoService,
    listarVendaPorProdutoService,
    listarVendaPorVendedorService,
    listarVendasService
} from "../services/vendaService.mjs"


export async function gerarVendaController(req, res) {
    const data = req.body
    const response = await gerarVendaService(data)

    return res.json(response)
}

export async function listarVendasController(req, res) {
    const response = await listarVendasService()
    return res.json(response)
}

export async function deletarVendasController(req, res) {
    const { id } = req.params

    const response = await deletarVendaPorIdService(id)
    return res.json(response)
}

export async function alterarVendaController(req, res) {
    const data = req.body
    const { id } = req.params

    const response = await alterarVendaPorIdService(data, id)

    return res.json(response)
}

export async function listarVendaporIdController(req, res) {
    const { id } = req.params

    const response = await listarVendaPorIdService(id)
    return res.json(response)
}

export async function listarVendaPorVendedorController(req, res) {
    const { id } = req.params

    const response = await listarVendaPorVendedorService(id)
    return res.json(response)
}

export async function listarVendaPorProdutoController(req, res){
    const { id } = req.params

    const response = await listarVendaPorProdutoService(id)

    return res.json(response)
}

export async function listarVendaPorPagamentoController(req, res) {
    const { metodoPagamento } = req.params

    const response = await listarVendaPorMetodoPagamentoService(metodoPagamento)

    return res.json(response)
}