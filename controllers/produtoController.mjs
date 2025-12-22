import mongoose from "mongoose";
import { alterarProdutoPorId, buscarProdutoPorNome, criarProduto, deletarProdutoPorId, listarProdutoPorId, listarProdutos, listarProdutosCategoria } from "../services/produtoService.mjs";
import { encontrarUsuarioPorEmail } from "../services/usuarioService.mjs";

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

    const mesmoId = await listarProdutoPorId(id)

    if (!mesmoId) {
        return res.json({ "error": "Produto nao encontrado!" })
    }

    const response = await alterarProdutoPorId(data, id)
    return res.json(response)
}

export async function deletarProdutoPorIdController(req, res) {
    const { id } = req.params

    const mesmoId = await listarProdutoPorId(id)

    if (!mesmoId) {
        return res.json({ "error": "Produto nao encontrado!" })
    }

    const response = deletarProdutoPorId(id)
    return res.json(response)
}

export async function listarProdutoPorIdController(req, res) {
    const { id } = req.params

    const mesmoId = await listarProdutoPorId(id)

    if (!mesmoId) {
        return res.json({ "error": "Produto nao encontrado!" })
    }

    const response = await listarProdutoPorId(id)

    return res.json(response)
}

export async function listarProdutosCategoriaController(req, res) {
    const { categoria } = req.params

    //categoria nao existe:

    const mesmaCategoria = await listarProdutosCategoria(categoria)

    if (mesmaCategoria.length === 0) {
        return res.json({ "error": "Categoria não encontrada!" })
    }

    const response = await listarProdutosCategoria(categoria)

    return res.json(response)
}

export async function buscarProdutoPorNomeController(req, res) {
    const { nome } = req.params

    const mesmoNome = await buscarProdutoPorNome(nome)

    if (mesmoNome.length === 0) {
        return res.json({ "error": "Produto não encontrado!" })
    }

    const response = await buscarProdutoPorNome(nome)

    return res.json(response)
}