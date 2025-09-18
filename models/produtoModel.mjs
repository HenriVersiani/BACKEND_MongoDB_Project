import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    preco: { 
        type: Number,
        required: true,
    },

    categoria: {
        type: String,
        required: true
    },

    imagem: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)

export const Produto = mongoose.model('Produto', produtoSchema)
