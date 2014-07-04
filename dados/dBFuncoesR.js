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
    var novoRestautante = new restauranteModel({
        tipo: req.body.tipo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        descricao: req.body.descricao
    });
    novoRestautante.save(function (err) {
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
        descricao: req.body.descricao
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