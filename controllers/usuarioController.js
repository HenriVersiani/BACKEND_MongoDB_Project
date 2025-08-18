import { criarUsuario, deletarUsuarioPorId, encontrarUsuarioPorEmail, listarUsuarios } from "../services/usuarioService.js";

export async function criarUsuarioController(data) {

  const {nome, email, areaOcupacao, numeroTelefone} = data

  if(!nome || !email || !areaOcupacao || !numeroTelefone){
    return "Preencha todos os campos!" 
  }

/*  const emailVerificado = encontrarUsuarioPorEmail(email)   ******* if nao esta funcionando.

  if(emailVerificado){
    return "Usuário já existe!"
  }
*/

  return await criarUsuario(data);
}

export async function listarUsuariosController() {
  return await listarUsuarios()
}

export async function deletarUsuarioController(id) {

  const usuarioDeletado = await deletarUsuarioPorId(id)

  return 'Usuário deletado com sucesso!'
}