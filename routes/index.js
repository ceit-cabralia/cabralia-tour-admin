var fs = require('fs'),
    restaurante = require('../dados/dBFuncoesR.js'),
    ponto = require('../dados/dBFuncoes.js'),
    hospedagem = require('../dados/dBFuncoesH.js');

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

// ROTAS de Restaurantes

exports.indexR = function (req, res) {
    fs.readFile('../views/restaurantes.html', function (error, content) {
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

exports.novoR = function (req, res) {
    fs.readFile('../views/novorestaurante.html', function (error, content) {
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

exports.criarR = function (req, res) {
    restaurante.gravarR(req, res);
};

exports.modificarR = function (req, res) {
    restaurante.modificarR(req, res);
};

exports.excluirR = function (req, res) {
    restaurante.excluirR(req, res);
};

exports.editarR = function (req, res) {
    fs.readFile('../views/editarrestaurante.html', function (error, content) {
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

// ROTAS de Hospedagens

exports.indexH = function (req, res) {
    fs.readFile('../views/hospedagem.html', function (error, content) {
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

exports.novoH = function (req, res) {
    fs.readFile('../views/novohospedagem.html', function (error, content) {
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

exports.criarH = function (req, res) {
    hospedagem.gravarH(req, res);
};

exports.modificarH = function (req, res) {
    hospedagem.modificarH(req, res);
};

exports.excluirH = function (req, res) {
    hospedagem.excluirH(req, res);
};

exports.editarH = function (req, res) {
    fs.readFile('../views/editarhospedagem.html', function (error, content) {
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
