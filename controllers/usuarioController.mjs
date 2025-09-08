import { alterarUsuarioPorId, criarUsuario, deletarUsuarioPorId, encontrarUsuarioPorEmail, encontrarUsuarioPorId, encontrarUsuarioPorNome, listarUsuarios } from "../services/usuarioService.js";

export async function criarUsuarioController(req, res) {
  const data = req.body
  const response = await criarUsuario(data)
  return res.json(response)
}

export async function listarUsuariosController(req, res) {
  const response = await listarUsuarios()
  return res.json(response)
}

export async function deletarUsuarioController(req, res) {
  const { id } = req.params

  const response = await deletarUsuarioPorId(id)

  return res.json(response)
}

//alterar por id

export async function alterarUsuarioPorIdController(req, res) {
  const { id } = req.params
  const data = req.body

  const response = alterarUsuarioPorId(data, id)

  return res.json(response)

}

//encontrar usuario por id

export async function encontrarUsuarioPorIdController(req, res) {

  const { id } = req.params

  const response = await encontrarUsuarioPorId(id)

  return res.json(response)
}

export async function encontrarUsuarioPorNomeController(req, res) {
  const { nome } = req.params
  const response = await encontrarUsuarioPorNome(nome)

  return res.json(response)

}