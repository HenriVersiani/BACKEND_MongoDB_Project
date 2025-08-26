import { alterarUsuarioPorId, criarUsuario, deletarUsuarioPorId, encontrarUsuarioPorEmail, encontrarUsuarioPorId, listarUsuarios } from "../services/usuarioService.js";

export async function criarUsuarioController(data) {

  const {nome, email, areaOcupacao, numeroTelefone} = data

  if(!nome || !email || !areaOcupacao || !numeroTelefone){
    return "Preencha todos os campos!" 
  }

 const emailVerificado = await encontrarUsuarioPorEmail(email)

  if(emailVerificado.length !== 0){
    return "Usuário já existe!"
  }

  return await criarUsuario(data);
}

export async function listarUsuariosController() {
  return await listarUsuarios()
}

export async function deletarUsuarioController(id) {

  const usuarioDeletado = await deletarUsuarioPorId(id)

  return 'Usuário deletado com sucesso!'
}

//alterar por id

export async function alterarUsuarioPorIdController(data, id) {

  const usuarioAntigo = await encontrarUsuarioPorId(id)

   if(usuarioAntigo.length === 0){
    return "Usuário não existe!"
  }

  return await alterarUsuarioPorId(data, id)

}

//encontrar usuario por id

