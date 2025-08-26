import "dotenv/config";
import mongoose from "mongoose";
import { alterarUsuarioPorIdController, criarUsuarioController, deletarUsuarioController, listarUsuariosController } from "./controllers/usuarioController.js";

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI_1);
        console.log("MongoDB conectado com sucesso!");

        const colecoes = await mongoose.connection.db.listCollections().toArray();

        // console.log("Coleções disponíveis:", colecoes);

         /* console.log("Usuário Criado:",await criarUsuarioController({
                nome: "Henrique",
                email: "henriversiani4000@gmail.com",
                areaOcupacao: "TI",
                numeroTelefone: 61991279527
            })) */

        //  console.log(await deletarUsuarioController("68addb16abe8321dbf041b5b"))

         console.log(await alterarUsuarioPorIdController(
            {
                nome: "Alberto",
                email: "albe@gmail.com",
                
            }, "68addeb27c96cfd750adb3c0"

        )) 

          console.log("Listagem de Usuários:", await listarUsuariosController())

        


    } catch (err) {
        console.log("Erro na conexão:", err);
    }
}

connection()