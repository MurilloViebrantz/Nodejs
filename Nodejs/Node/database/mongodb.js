const mongoose = require('mongoose');
const URL = 'mongodb://0.0.0.0:27017/user';
const db = mongoose.connect(URL);
const con = mongoose.connection;

con.on('open', function () {
    console.log('Conectado');
});

con.on('error', function () {
    console.log('Erro!');
});

con.on('close', function () {
    console.log('Desconetado!');
});

module.exports = db;