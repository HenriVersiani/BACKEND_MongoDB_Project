import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import { userRouter } from "./routes/usuarioRouter.mjs";
import { productRouter } from "./routes/produtoRouter.mjs";
import cors from 'cors'
import { vendaRouter } from "./routes/vendaRouter.mjs";

dotenv.config();

const app = express();

app.use(express.json());
// app.use("/", async (req, res) => {
//   const myCollections = await mongoose.connection.db.listCollections().toArray();
//   res.json(myCollections);
// });

app.use(cors())

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/vendas", vendaRouter)

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI_1)
  .then(() => {
    console.log("🟢 Conectado ao MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err.message);
  });
