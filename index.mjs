/* import "dotenv/config";
import mongoose from "mongoose";

const AgricultorSchema = new mongoose.Schema({
    fullName: String,
    cpf: String,
    birthDate: Date,
    phone: String,
    active: Boolean
});

const Agricultor = mongoose.model("Agricultor", AgricultorSchema);

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB conectado com sucesso!");

        const colecoes = await mongoose.connection.db.listCollections().toArray();
        console.log("Coleções disponíveis:", colecoes);

        const listAll = async () => {
            const dados = await mongoose.connection.db
                .collection("agricultors")
                .find()
                .toArray();

            console.log("Documentos da coleção:", dados);
        }

        const listAllWithMongoose = async () => {
            const dados = await Agricultor.find();
            console.log("Documentos encontrados com Mongoose:", dados);
        }

        const createWithoutSchema = async () => {
            const novo = {
                fullName: "Alberto",
                cpf: "1921992",
                birthDate: new Date("1985-12-22"),
                phone: "(28)99577-7777",
                active: true
            };

            const resultado = await mongoose.connection.db
                .collection("agricultors")
                .insertOne(novo);

            console.log("Inserido sem schema (_id):", resultado.insertedId);
        };

        // Execucoes
        // await listAll();
        await listAllWithMongoose();
        // await createWithMongoose();
        // await createWithoutSchema();

        // await createProdutoAgricolaWithSchema();
        // await createProdutoAgricolaWithoutSchema();

    } catch (err) {
        console.log("Erro na conexão:", err);
    }
}

connection()