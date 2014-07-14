banco = require('./dB.js'),
//Funções de  CRUD para Transportes
exports.listarT = function (req, res) {
    transporteModel.find().exec(function (err, transporte) {
        if (err) {
            return console.log(err);
        }
        return res.json(transporte);
    });
}

exports.gravarT = function (req, res) {
    var novoTransporte = new transporteModel({
        tipo: req.body.tipo,
        nome: req.body.nome,
        telefone: req.body.telefone,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        placa: req.body.placa,
        descricao: req.body.descricao
    });
    novoTransporte.save(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.procurarT = function (req, res) {
    transporteModel.find({
        nome: req.params.nom
    }).exec(function (err, transporte) {
        if (err) {
            return console.log(err);
        }
        return res.json(transporte);
    });
}

exports.modificarT = function (req, res) {
    transporteModel.update({
        _id: req.params.id
    }, {
        tipo: req.body.tipo,
        nome: req.body.nome,
        telefone: req.body.telefone,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        placa: req.body.placa,
        descricao: req.body.descricao
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.excluirT = function (req, res) {
    transporteModel.remove({
        nome: req.params.nom
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}