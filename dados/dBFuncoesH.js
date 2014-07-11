banco = require('./dB.js'),
//Funções de  CRUD para Hospedagens

exports.listarH = function (req, res) {
    hospedagemModel.find().exec(function (err, hospedagem) {
        if (err) {
            return console.log(err);
        }
        return res.json(hospedagem);
    });
}

exports.gravarH = function (req, res) {
    var novoHospedagem = new hospedagemModel({
        tipo: req.body.tipo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        descricao: req.body.descricao
    });
    novoHospedagem.save(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.procurarH = function (req, res) {
    hospedagemModel.find({
        nome: req.params.nom
    }).exec(function (err, hospedagem) {
        if (err) {
            return console.log(err);
        }
        return res.json(hospedagem);
    });
}

exports.modificarH = function (req, res) {
    hospedagemModel.update({
        _id: req.params.id
    }, {
        tipo: req.body.tipo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        descricao: req.body.descricao
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.excluirH = function (req, res) {
    hospedagemModel.remove({
        nome: req.params.nom
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}