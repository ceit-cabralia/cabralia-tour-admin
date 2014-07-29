banco = require('./dB.js'),
//Funções de  CRUD para Restaurantes

exports.listarR = function (req, res) {
    restauranteModel.find().exec(function (err, restaurante) {
        if (err) {
            return console.log(err);
        }
        return res.json(restaurante);
    });
}

exports.gravarR = function (req, res) {
    var novoRestaurante = new restauranteModel({
        tipo: req.body.tipo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        descricao: req.body.descricao,
         categoria: "resta/"
    });
    novoRestaurante.save(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.procurarR = function (req, res) {
    restauranteModel.find({
        nome: req.params.nom
    }).exec(function (err, restaurante) {
        if (err) {
            return console.log(err);
        }
        return res.json(restaurante);
    });
}

exports.modificarR = function (req, res) {
    restauranteModel.update({
        _id: req.params.id
    }, {
        tipo: req.body.tipo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        descricao: req.body.descricao,
         categoria: "resta/"
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.excluirR = function (req, res) {
    restauranteModel.remove({
        nome: req.params.nom
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}