require("./mongodb");
const mongoose = require("mongoose");
const cadastros = require("./user.json");
const cadastroModel = require("../models/registerModel");

async function carregarDados() {
    try {
        await cadastroModel.deleteMany({});
        for (const cadastro of cadastros) {
            await registerModel.create(cadastro);
        }
        console.log("cadastrado com sucesso");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();