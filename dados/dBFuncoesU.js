banco = require('./dB.js'),
//Funções de  CRUD para utilidades

exports.listarU = function (req, res) {
    utilidadeModel.find().exec(function (err, utilidade) {
        if (err) {
            return console.log(err);
        }
        return res.json(utilidade);
    });
}

exports.gravarU = function (req, res) {
    var novaUtilidade = new utilidadeModel({
        tipo: req.body.tipo,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        imagens: req.body.imagens,
        imagensD1: req.body.imagensD1,
        imagensD2: req.body.imagensD2,
        descricao: req.body.descricao,
         categoria: "util/"
    });
    novaUtilidade.save(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.procurarU = function (req, res) {
    utilidadeModel.find({
        nome: req.params.nom
    }).exec(function (err, utilidade) {
        if (err) {
            return console.log(err);
        }
        return res.json(utilidade);
    });
}

exports.modificarU = function (req, res) {
    utilidadeModel.update({
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
         categoria: "util/"
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}

exports.excluirU = function (req, res) {
    utilidadeModel.remove({
        nome: req.params.nom
    }).exec(function (err) {
        if (err) {
            callback(err);
        } else {
            res.send();
        }
    });
}