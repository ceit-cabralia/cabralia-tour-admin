banco = require('./dB.js'),
//Funções de  CRUD para SOBRE

exports.listarS = function (req, res) {
    sobreModel.find().exec(function (err, sobre) {
        if (err) {
            return console.log(err);
        }
        return res.json(sobre);
    });
}

exports.gravarS = function (req, res) {
    var novoSobre = new sobreModel({
        mapa: req.body.mapa,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        nome: req.body.nome
    });
    novoSobre.save(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.procurarS = function (req, res) {
    sobreModel.find({
        nome: req.params.nom
    }).exec(function (err, sobre) {
        if (err) {
            return console.log(err);
        }
        return res.json(sobre);
    });
}

exports.modificarS = function (req, res) {
    sobreModel.update({
        _id: req.params.id
    }, {
        mapa: req.body.mapa,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        nome: req.body.nome
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.excluirS = function (req, res) {
    sobreModel.remove({
        nome: req.params.nom
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}