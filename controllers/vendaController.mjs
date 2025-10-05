
import { alterarVendaPorIdService, deletarVendaPorIdService, gerarVendaService,  listarVendaPorIdService,  listarVendasPorVendedorService,  listarVendasService }  from "../services/vendaService.mjs"


export async function gerarVendaController(req, res) {
    const data = req.body
    const response = await gerarVendaService(data)

    return res.json(response)
}

export async function listarVendasController(req, res) {
    const response = await listarVendasService()
    res.json(response)
}

export async function deletarVendasController(req, res) {
    const { id } = req.params

    const response = await deletarVendaPorIdService(id)
    res.json(response)
}

export async function alterarVendaController(req, res) {
    const data = req.body
    const { id }  = req.params

    console.log(data, id)

    const response = await alterarVendaPorIdService(data, id)

    res.json(response)
}

export async function listarVendaporIdController(req, res) {
    const { id } = req.params

    const response = await listarVendaPorIdService(id)
    res.json(response)
}

export async function listarVendasPorVendedorController(req, res) {
    const idVendedor = req.params

    const response = await listarVendasPorVendedorService(idVendedor)
    res.json(response)
}