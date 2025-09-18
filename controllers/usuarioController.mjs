import mongoose from "mongoose";
import { alterarUsuarioPorId, criarUsuario, deletarUsuarioPorId, encontrarUsuarioPorEmail, encontrarUsuarioPorId, encontrarUsuarioPorNome, listarUsuarios } from "../services/usuarioService.js";

export async function criarUsuarioController(req, res) {
  const data = req.body
  const response = await criarUsuario(data)

  const mesmoEmail = await encontrarUsuarioPorEmail(email)
   
     if(mesmoEmail.length !== 0){
       return res.json("Usuário já existe!")
     }

  return res.json(response)
}

export async function listarUsuariosController(req, res) {
  const response = await listarUsuarios()
  return res.json(response)
}

export async function deletarUsuarioController(req, res) {
  const { id } = req.params

  const mesmoId = await encontrarUsuarioPorId(id)

  if(!mesmoId){
    return res.json("Usuário nao encontrado!")
  }

  const response = await deletarUsuarioPorId(id)

  return res.json(response)
}

//alterar por id

export async function alterarUsuarioPorIdController(req, res) {
  const { id } = req.params
  const data = req.body

  const mesmoId = await encontrarUsuarioPorId(id)

  if(!mesmoId){
    return res.json("Usuário nao encontrado!")
  }

  const response = alterarUsuarioPorId(data, id)

  return res.json(response)

}

//encontrar usuario por id

export async function encontrarUsuarioPorIdController(req, res) {

  const { id } = req.params

  const mesmoId = await encontrarUsuarioPorId(id)

  if(!mesmoId){
    return res.json("Usuário nao encontrado!")
  }

  const response = await encontrarUsuarioPorId(id)

  return res.json(response)
}

export async function encontrarUsuarioPorNomeController(req, res) {
  const { nome } = req.params
  const response = await encontrarUsuarioPorNome(nome)

  if(response.length === 0){
    return res.json("Nome nao encontrado!")
  }

  return res.json(response)

}