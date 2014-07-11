mongoose = require('mongoose');


mongoose.connect('mongodb://ceitpr3g:ceitpr3g1906@ds027809.mongolab.com:27809/hayodb');

//mongoose.connect('mongodb://localhost:27017/hayoDB');



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function calbckcallback() {
    init();
});

function init() {
    schema = new mongoose.Schema({
        nome: {
            type: String,
            unique: true
        },
        endereco: String,
        imagens: String,
        descricao: String
    });
    pontoModel = mongoose.model('Ponto', schema);


    // Esquemas de Restaurantes
    schema = new mongoose.Schema({
        tipo: String,
        nome: {
            type: String,
            unique: true
        },
        imagens: String,
        endereco: String,
        telefone: String,
        descricao: String
    });
    restauranteModel = mongoose.model('Restaurante', schema);

    // Esquemas de Transportes
    schema = new mongoose.Schema({
        tipo: String,
        nome: {
            type: String,
            unique: true
        },
        imagens: String,
        telefone: String,
        descricao: String
    });
    transporteModel = mongoose.model('Transporte', schema);

    // Esquemas de Utilidades Públicas
    schema = new mongoose.Schema({
        tipo: String,
        nome: {
            type: String,
            unique: true
        },
        endereco: String,
        imagens: String,
        telefone: String,
        descricao: String
    });
    utilidadeModel = mongoose.model('Utilidade', schema);

    //Esquemas de Hospedagens
    schema = new mongoose.Schema({
        tipo: String,
        nome: {
            type: String,
            unique: true
        },
        endereco: String,
        imagens: String,
        telefone: String,
        descricao: String
    });
    hospedagemModel = mongoose.model('Hospedagem', schema);

    //Esquemas de SOBRE

    schema = new mongoose.Schema({

        nome: {
            type: String,
            unique: true
        },

        imagens: String
    });
    sobreModel = mongoose.model('Sobre', schema);

}