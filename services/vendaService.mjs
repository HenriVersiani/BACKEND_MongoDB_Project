import { Venda } from "../models/vendaModel.mjs";

export async function gerarVendaService(data) {
    const novaVenda = await Venda(data)
    return await novaVenda.save()
}

export async function listarVendasService() {
    return await Venda.find();
}

export async function deletarVendaPorIdService(id) {
  return await Venda.findByIdAndDelete(id);
}

export async function alterarVendaPorIdService(data, id) {
  return await Venda.findByIdAndUpdate(id, data, { new: true })
}

export async function listarVendaPorIdService(id){
    return await Venda.findById(id)
}

export async function listarVendasPorVendedorService(id) {
    return await Venda.findById(id)
}