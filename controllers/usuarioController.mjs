import mongoose from "mongoose";
import { alterarUsuarioPorId, criarUsuario, deletarUsuarioPorId, encontrarUsuarioLogin, encontrarUsuarioPorEmail, encontrarUsuarioPorId, encontrarUsuarioPorNome, encontrarUsuarioPorTelefone, listarUsuarios } from "../services/usuarioService.mjs";

export async function criarUsuarioController(req, res) {
  const data = req.body
  const { email } = data

  const mesmoEmail = await encontrarUsuarioPorEmail(email)

  if (mesmoEmail.length !== 0) {
    return res.json({ "error": "Usuário já existe!" })
  }

  const response = await criarUsuario(data)

  return res.json(response)
}

export async function listarUsuariosController(req, res) {
  const response = await listarUsuarios()
  return res.json(response)
}

export async function deletarUsuarioController(req, res) {
  const { id } = req.params

  const mesmoId = await encontrarUsuarioPorId(id)

  if (!mesmoId) {
    return res.json({ "error": "Usuário não encontrado!" })
  }

  const response = await deletarUsuarioPorId(id)

  return res.json(response)
}

//alterar por id

export async function alterarUsuarioPorIdController(req, res) {
  const { id } = req.params
  const data = req.body

  const mesmoId = await encontrarUsuarioPorId(id)

  if (!mesmoId) {
    return res.json({ "error": "Usuário nao encontrado!" })
  }

  const response = await alterarUsuarioPorId(data, id)

  console.log("resposta:",response)

  return res.json(response)

}

//encontrar usuario por id

export async function encontrarUsuarioPorIdController(req, res) {

  const { id } = req.params

  const mesmoId = await encontrarUsuarioPorId(id)

  if (!mesmoId) {
    return res.json({ "error": "Usuário nao encontrado!" })
  }

  const response = await encontrarUsuarioPorId(id)

  return res.json(response)
}

export async function encontrarUsuarioPorNomeController(req, res) {
  const { nome } = req.params
  const response = await encontrarUsuarioPorNome(nome)

  if (response.length === 0) {
    return res.json({ "error": "Nome nao encontrado!" })
  }

  return res.json(response)

}

export async function loginUsuarioController(req, res) {
  const { email, senha } = req.body

  console.log("email e senha:",email, senha)

  const usuarioValido = await encontrarUsuarioLogin(email, senha)

  if (!usuarioValido) {
    return res.json(
      {
        "error": "Email ou senha inválida",
        "token": "failed"
      })
  }

  const response = {
    "idUsuario": `${usuarioValido._id}`,
    "token": "success"
  }

  return res.json(response)
}