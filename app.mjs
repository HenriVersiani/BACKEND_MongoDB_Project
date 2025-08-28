import "dotenv/config";
import mongoose from "mongoose";
import { alterarUsuarioPorIdController, criarUsuarioController, deletarUsuarioController, encontrarUsuarioPorIdController, listarUsuariosController } from "./controllers/usuarioController.js";
import { alterarProdutoPorIdController, criarProdutoController, deletarProdutoPorIdController, listarProdutoPorIdController, listarProdutosCategoriaController, listarProdutosController } from "./controllers/produtoController.js";

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI_1);
        console.log("MongoDB conectado com sucesso!");

        const colecoes = await mongoose.connection.db.listCollections().toArray();

         console.log("Coleções disponíveis:", colecoes);

         //CRIAR USUARIO

        /* console.log("Usuário Criado:",await criarUsuarioController({
               nome: "Alberto",
               email: "alberto@gmail.com",
               areaOcupacao: "Professor",
               numeroTelefone: 61991245227
           })) */

        //LISTAR USUARIO

        // console.log("Listagem de Usuários:", await listarUsuariosController())

        //DELETAR USUARIO

         // console.log(await deletarUsuarioController("68addeb27c96cfd750adb3c0"))

        //ALTERAR USUARIO

         /* console.log(await alterarUsuarioPorIdController(
            {
                nome: "Leo1212",
                email: "leo@gmail.com",
                areaOcupacao: "TI",
                numeroTelefone: 6199124222
                
            }, "68b0b0f43c23cd6e625f31bc"

        )) */

        //ENCONTRAR POR ID USUARIO   

        //  console.log("Resposta:", await encontrarUsuarioPorIdController("68addeb27c96cfd750adb3c0"))

        //CRIAR PRODUTO
        
         /* console.log(await criarProdutoController(
            {
                nome: "Placa de rede",
                preco: 220,
                categoria: "Hardware",
                imagem: "exemplo_link"
                
            })) */

        //LISTAR PRODUTOS
        
        // console.log(await listarProdutosController())

        //ALTERAR PRODUTO POR ID

       /* console.log(await alterarProdutoPorIdController(
        {
             nome: "Placa de vídeo",
                preco: 3000,
                categoria: "Hardware",
                imagem: "exemplo_link"
        },"id"
    )) */

        //DELETAR PRODUTO

        // console.log(await deletarProdutoPorIdController("id"))

        //LISTAR PRODUTO POR ID

        // console.log(await listarProdutoPorIdController("id"))

        //LISTAR PRODUTOS DE UMA CATEGORIA

         console.log(await listarProdutosCategoriaController("Hardware"))

    } catch (err) {
        console.log("Erro na conexão:", err);
    }
}

connection()