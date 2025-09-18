import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    areaOcupacao: {
        type: String,
        required: true
    },

    numeroTelefone: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true
    }
)

export const Usuario = mongoose.model('Usuario', usuarioSchema)
