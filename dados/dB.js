mongoose = require('mongoose');

// Conex�o com o Banco 

mongoose.connect('mongodb://localhost:27017/hayoDB');
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
        endereco: String,
        telefone: String,
        descricao: String
    });
    restauranteModel = mongoose.model('Restaurante', schema);
}