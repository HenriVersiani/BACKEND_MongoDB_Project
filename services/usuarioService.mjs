import { Usuario } from "../models/usuarioModel.mjs";
import bcrypt, { compareSync } from "bcryptjs";

export async function encontrarUsuarioPorEmail(email) {
  const usuario = await Usuario.find({ email: email })
  return usuario
}

export async function encontrarUsuarioPorId(id) {
  const usuario = await Usuario.findById(id)
  return usuario
}

export async function criarUsuario(data) {
  const payload = { ...data }

  if (payload.senha) {
    payload.senha = await bcrypt.hash(payload.senha, 10)
  }

  const novoUsuario = new Usuario(payload)
  return await novoUsuario.save()
}

export async function listarUsuarios() {
  return await Usuario.find();
}

export async function deletarUsuarioPorId(id) {
  return await Usuario.findByIdAndDelete(id);
}

export async function alterarUsuarioPorId(data, id) {
  return await Usuario.findByIdAndUpdate(id, data, { new: true })
}

export async function encontrarUsuarioPorNome(nomeUsuario) {
  return await Usuario.find({
    nome: { $regex: nomeUsuario, $options: "i" }
  });
}


export async function encontrarUsuarioPorTelefone(numeroTelefone) {
  return await Usuario.find({ numeroTelefone: numeroTelefone })
}

export async function encontrarUsuarioLogin(email, senha) {
  const usuario = await Usuario.findOne({ email: email }).lean()

  const payload = { ...usuario }

  const senhaVerify = await bcrypt.compare(senha, payload.senha)

  if (!senhaVerify) {
    return console.log("senha incorreta")
  }

  if (payload.length === 0) {
    return false
  }

// token de retorno
  return payload
}