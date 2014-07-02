var fs = require('fs'),
    ponto = require('../dados/dBFuncoes.js');

exports.index = function (req, res) {
    fs.readFile('../views/pontos.html', function (error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(content, 'utf-8');
        }
    });
};

exports.novo = function (req, res) {
    fs.readFile('../views/novoponto.html', function (error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(content, 'utf-8');
        }
    });
};

exports.criar = function (req, res) {
    ponto.gravar(req, res);
};

exports.modificar = function (req, res) {
    ponto.modificar(req, res);
};

exports.excluir = function (req, res) {
    ponto.excluir(req, res);
};

exports.editar = function (req, res) {
    fs.readFile('../views/editarponto.html', function (error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(content, 'utf-8');
        }
    });
};