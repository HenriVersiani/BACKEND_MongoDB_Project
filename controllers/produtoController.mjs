import { alterarProdutoPorId, buscarProdutoPorNome, criarProduto, deletarProdutoPorId, listarProdutoPorId, listarProdutos, listarProdutosCategoria } from "../services/produtoService.mjs";
import { encontrarUsuarioPorEmail } from "../services/usuarioService.js";

export async function criarProdutoController(req, res) {
    const data = req.body
    
    const { nome, preco, categoria, imagem } = data

    if (!data) {
        return res.json("Informaçoes obrigatórias nao enviadas!")
    }

    if (!nome || !preco || !categoria || !imagem) {
        return res.json("Preencha todos os campos!")
    }
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

    if (!id) {
        return res.json("Id nao informado!")
    }

    const mesmoId = await listarProdutoPorId(id)

    if (!mesmoId) {
        return res.json("Produto nao encontrado!")
    }

    const response = alterarProdutoPorId(data, id)
    return res.json(response)
}

export async function deletarProdutoPorIdController(req, res) {
    const { id } = req.params

    if (!id) {
        return res.json("Id nao informado!")
    }

    const mesmoId = await listarProdutoPorId(id)

    if (!mesmoId) {
        return res.json("Produto nao encontrado!")
    }

    const response = deletarProdutoPorId(id)
    return res.json(response)
}

export async function listarProdutoPorIdController(req, res) {
    const { id } = req.params

    if(!id){
        return res.json("Id nao informado!")
    }

    const mesmoId = await listarProdutoPorId(id)

    if (!mesmoId) {
        return res.json("Produto nao encontrado!")
    }

    const response = await listarProdutoPorId(id)

    return res.json(response)
}

export async function listarProdutosCategoriaController(req, res) {
    const { categoria } = req.params

    if(!categoria){
        return res.json("Categoria não informada!")
    }

    //categoria nao existe:

    const mesmaCategoria = await listarProdutosCategoria(categoria)

    console.log(mesmaCategoria)

    if(mesmaCategoria.length === 0){
        return res.json("Categoria não encontrada!")
    }

    const response = await listarProdutosCategoria(categoria)

    return res.json(response)
}

export async function buscarProdutoPorNomeController(req, res) {
    const { nome } = req.params

    if(!nome){
        return res.json("Nome não informado!")
    }

    const mesmoNome = await buscarProdutoPorNome(nome)

    if(mesmoNome.length === 0){
        return res.json("Produto não encontrado!")
    }

    const response = await buscarProdutoPorNome(nome)

    return res.json(response)
}