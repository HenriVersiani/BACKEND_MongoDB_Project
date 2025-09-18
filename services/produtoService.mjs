import { Produto } from "../models/produtoModel.mjs"

export async function criarProduto(data) {
    const novoProduto = new Produto(data)
    return await novoProduto.save()
}

export async function listarProdutos() {
    return await Produto.find()
}

export async function alterarProdutoPorId(data, id) {
    return await Produto.findByIdAndUpdate(id, data, { new: true })
}

export async function deletarProdutoPorId(id) {
    return await Produto.findByIdAndDelete(id)
}

export async function listarProdutoPorId(id) {
    return await Produto.findById(id)
}

export async function listarProdutosCategoria(nomeCategoria) {
    return await Produto.find({categoria: nomeCategoria })
}

export async function buscarProdutoPorNome(nomeProduto) {
    return await Produto.find({nome: nomeProduto})
}