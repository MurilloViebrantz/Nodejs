const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    telefone: Number,
    endereco: String,
    cidade: String,
    estado: String,
    status: Boolean
});

module.exports = mongoose.model('cadastro', registerSchema);