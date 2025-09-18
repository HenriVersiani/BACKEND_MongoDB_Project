import express from "express"
import mongoose from "mongoose"


export async function verificarCriacaoUsuario(req, res, next) {

    const data = req.body

    const { nome, email, areaOcupacao, numeroTelefone } = data

    if (!data) {
        return res.json("Informaçoes obrigatórias nao enviadas!")
    }

    if (!nome || !email || !areaOcupacao || !numeroTelefone) {
        return res.json("Preencha todos os campos!")
    }

    if (typeof nome !== "string") {
        return res.json({ "error": "Nome no formato errado" })
    }

    if (typeof email !== "string") {
        return res.json({ "error": "Email no formato errado" })
    }

    if (typeof areaOcupacao !== "string") {
        return res.json({ "error": "Area de Ocupação no formato errado" })
    }

    if (typeof numeroTelefone !== "number") {
        return res.json({ "error": "Número no formato errado" })
    }

    next()
}

export async function verificarDeletarUsuário(req, res, next) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ "error": "Id não é válido" })
    }
    next()
}

export async function verificarAlterarUsuario(req, res, next) {
    const { id } = req.params
    const data = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ "error": "Id não é válido" })
    }

    if (!data) {
        return res.json("Dados não informados!")
    }
    next()
}

export async function verificarEncontrarUsuarioId(req, res, next) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ "error": "Id não é válido" })
    }
    next()
}

export async function verificarEncontrarUsuarioNome(req,res,next) {
    const { nome } = req.params
      const response = await encontrarUsuarioPorNome(nome)
    
      if(!nome){
        return res.json("Nome nao informado!")
      }
      next()
}
