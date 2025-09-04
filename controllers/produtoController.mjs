import { alterarProdutoPorId, buscarProdutoPorNome, criarProduto, deletarProdutoPorId, listarProdutoPorId, listarProdutos, listarProdutosCategoria } from "../services/produtoService.js";

export async function criarProdutoController(req, res) {
    const data = req.body
    const response = await criarProduto(data)
    return res.json(response)
}

export async function listarProdutosController(req, res) {
    const response = await listarProdutos()
    return res.json(response)
}

export async function alterarProdutoPorIdController(req, res) {
    const { id } = req.params
    const data = req.body

    const response = alterarProdutoPorId(data, id)
    return res.json(response)
}

export async function deletarProdutoPorIdController(req, res) {
    const { id } = req.params
    const response = deletarProdutoPorId(id)
    return res.json(response)
}

export async function listarProdutoPorIdController(req, res) {
    const { id } = req.params

    const response = await listarProdutoPorId(id)

    return res.json(response)
}

export async function listarProdutosCategoriaController(req, res) {
    const { categoria } = req.params
    const response = await listarProdutosCategoria(categoria)

    return res.json(response)
}

export async function buscarProdutoPorNomeController(req, res) {
    const { nome } = req.params
    const response = await buscarProdutoPorNome(nome)

    return res.json(response)
}