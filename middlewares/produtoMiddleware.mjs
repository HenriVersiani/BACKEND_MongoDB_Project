import mongoose from "mongoose"

export function verificarCriacaoProduto(req, res, next) {
    const data = req.body

    const { nome, preco, categoria, imagem } = data

    if (!data) {
        return res.json({ "error": "Informaçoes obrigatórias nao enviadas!" })
    }

    if (!nome || !preco || !categoria || !imagem) {
        return res.json({ "error": "Preencha todos os campos!" })
    }

    if (typeof nome !== "string") {
        return res.json({ "error": "Nome no formato errado" })
    }

    if (typeof preco !== "number") {
        return res.json({ "error": "Preço no formato errado" })
    }

    if (typeof categoria !== "string") {
        return res.json({ "error": "Categoria no formato errado" })
    }

    if (typeof imagem !== "string") {
        return res.json({ "error": "Imagem no formato errado" })
    }

    next()
}

export function verificarAlterarProduto(req, res, next) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ "error": "Id não é válido" })
    }
    next()
}

export async function verificarDeletarProduto(req, res, next) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ "error": "Id não é válido" })
    }
    next()
}

export async function verificarListarProduto(req, res, next) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ "error": "Id não é válido" })
    }

    next()
}

export async function verificarListarProdutosCategoria(req, res, next) {
    const { categoria } = req.params

    if (!categoria) {
        return res.json({ "error": "Categoria não informada!" })
    }

    //categoria nao existe:

    next()
}

export async function verificarListarProdutoPorNome(req, res, next) {
    const { nome } = req.params

    if (!nome) {
        return res.json({ "error": "Nome não informado!" })
    }
    next()
}