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
        imagens01: req.body.imagens01,
        descricao: req.body.descricao,
        imagens02: req.body.imagens02,
        historia: req.body.historia,
        mapa01: req.body.mapa01,
        mapa02: req.body.mapa02,
       

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
        imagens01: req.body.imagens01,
        descricao: req.body.descricao,
        imagens02: req.body.imagens02,
        historia: req.body.historia,
        mapa01: req.body.mapa01,
        mapa02: req.body.mapa02
        
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