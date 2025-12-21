import { Usuario } from "../models/usuarioModel.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const getJwtConfig = () => {
  const secret = process.env.JWT_SECRET
  const expiresIn = process.env.JWT_EXPIRES_IN

  if (!secret) {
    throw new Error("JWT_SECRET não configurado.");
  }

  return { secret, expiresIn }
}

const gerarToken = (usuario) => {
  const { secret, expiresIn } = getJwtConfig()
  return jwt.sign({ sub: usuario._id, email: usuario.email }, secret, { expiresIn })
}

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

  const novoUsuario = new Usuario(payload).save()
  const token = gerarToken(novoUsuario)
  const { _id, nome, email } = await novoUsuario

  return { id: _id, nome: nome, email: email, token: token }
}

export async function listarUsuarios() {
  return await Usuario.find();
}

export async function deletarUsuarioPorId(id) {
  return await Usuario.findByIdAndDelete(id);
}

export async function alterarUsuarioPorId(data, id) {

  const { oldSenha, newSenha, ...userData } = data
  const payload = { ...userData }
  const usuario = await encontrarUsuarioPorId(id)

  const senhaVerify = await bcrypt.compare(oldSenha, usuario.senha)

  if (!senhaVerify) {
    return {error: "Incorrect old password"}
  }

  if (newSenha) {
    payload.senha = await bcrypt.hash(newSenha, 10)
  }

  console.log(payload)

  return await Usuario.findByIdAndUpdate(id, payload, { new: true })
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

  if(usuario == null){
    return {"error": "Incorrect email"}
  }

  const payload = { ...usuario }

  const senhaVerify = await bcrypt.compare(senha, payload.senha)

  if (!senhaVerify) {
    return {"error": "Incorrect password"} 
  }

  if (payload.length === 0) {
    return {"error": "Invalid arguments"}
  }

  const token = gerarToken(usuario)

  return { email: payload.email, nome: payload.nome, token }
}