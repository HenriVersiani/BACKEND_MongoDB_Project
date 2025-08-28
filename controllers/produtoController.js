import { alterarProdutoPorId, criarProduto, deletarProdutoPorId, listarProdutoPorId, listarProdutos, listarProdutosCategoria } from "../services/produtoService.js";

export async function criarProdutoController(data) {

    return await criarProduto(data)
}

export async function listarProdutosController() {
    return await listarProdutos()
}

export async function alterarProdutoPorIdController(data, id) {
    return await alterarProdutoPorId(data, id)
}

export async function deletarProdutoPorIdController(id) {
    return await deletarProdutoPorId(id)
}

export async function listarProdutoPorIdController(id) {
    return await listarProdutoPorId(id)
}

export async function listarProdutosCategoriaController(nomeCategoria) {
    return await listarProdutosCategoria(nomeCategoria)
}