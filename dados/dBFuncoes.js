banco = require('./dB.js'),

exports.listar = function (req, res) {
    pontoModel.find().exec(function (err, ponto) {
        if (err) {
            return console.log(err);
        }
        return res.json(ponto);
    });
}

exports.gravar = function (req, res) {
    var novoPonto = new pontoModel({
        nome: req.body.nome,
        endereco: req.body.endereco,
        descricao: req.body.descricao
    });
    novoPonto.save(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.procurar = function (req, res) {
    pontoModel.find({
        nome: req.params.nom
    }).exec(function (err, ponto) {
        if (err) {
            return console.log(err);
        }
        return res.json(ponto);
    });
}

exports.modificar = function (req, res) {
    pontoModel.update({
        _id: req.params.id
    }, {
        nome: req.body.nome,
        endereco: req.body.endereco,
        descricao: req.body.descricao
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.excluir = function (req, res) {
    pontoModel.remove({
        nome: req.params.nom
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}