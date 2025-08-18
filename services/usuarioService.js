import { Usuario } from "../models/usuarioModel.js";

export async function encontrarUsuarioPorEmail(email) {
    const usuario = await Usuario.find({ email: email })
    return usuario
}

export async function criarUsuario(data) {
    const novoUsuario = new Usuario(data)
    return await novoUsuario.save()
}

export async function listarUsuarios() {
     return await Usuario.find();
}

export async function deletarUsuarioPorId(id) {
  return await Usuario.findByIdAndDelete(id);
}