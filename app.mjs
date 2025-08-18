import "dotenv/config";
import mongoose from "mongoose";
import { criarUsuarioController, deletarUsuarioController,  listarUsuariosController } from "./controllers/usuarioController.js";


async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI_1);
        console.log("MongoDB conectado com sucesso!");

        const colecoes = await mongoose.connection.db.listCollections().toArray();
        console.log("Coleções disponíveis:", colecoes);

    /*  console.log(await criarUsuarioController({
            nome: "Henrique",
            email: "henriversiani1@gmail.com",
            areaOcupacao: "TI",
            numeroTelefone: 61991279527
        }))
    */

      console.log(await deletarUsuarioController("689e4c470453e92681f1eee5"))

      console.log(await listarUsuariosController())


    } catch (err) {
        console.log("Erro na conexão:", err);
    }
}

connection()