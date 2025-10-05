import mongoose from "mongoose";

const vendaSchema = new mongoose.Schema({
    idProduto: {
        type: String,
        required: true,
    },

    idVendedor: {
        type: String,
        required: true,
    },

    precoVenda: {
        type: Number,
        required: true
    },

    metodoPagamento: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

export const Venda = mongoose.model('Venda', vendaSchema)