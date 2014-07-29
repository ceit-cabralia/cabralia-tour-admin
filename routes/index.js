var fs = require('fs'),
    restaurante = require('../dados/dBFuncoesR.js'),
    ponto = require('../dados/dBFuncoes.js'),
    transporte = require('../dados/dBFuncoesT.js'),
    hospedagem = require('../dados/dBFuncoesH.js'),
    utilidade = require('../dados/dBFuncoesU.js'),
    sobre = require('../dados/dBFuncoesS.js');



exports.index = function (req, res) {
    // Customização para rodar no Heroku
    // fs.readFile('./views/pontos.html', function (error, content) {
        //Customização para rodar Local
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/novoponto.html', function (error, content) {
        //Customização para rodar Local
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/editarponto.html', function (error, content) {
        //Customização para rodar Local
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/restaurantes.html', function (error, content) {
        //Customização para rodar Local
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/novorestaurante.html', function (error, content) {
        //Customização para rodar Local
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/editarrestaurante.html', function (error, content) {
        //Customização para rodar Local
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


// ROTAS de Transportes

exports.indexT = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/transportes.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/transportes.html', function (error, content) {
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

exports.novoT = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/novotransporte.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/novotransporte.html', function (error, content) {
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

exports.criarT = function (req, res) {
    transporte.gravarT(req, res);
};

exports.modificarT = function (req, res) {
    transporte.modificarT(req, res);
};

exports.excluirT = function (req, res) {
    transporte.excluirT(req, res);
};

exports.editarT = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/editartransporte.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/editartransporte.html', function (error, content) {
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

// ROTAS de Utilidades Públicas
exports.indexU = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/utilidadepublica.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/utilidadepublica.html', function (error, content) {
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

exports.novoU = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/novautilidade.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/novautilidade.html', function (error, content) {
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

exports.criarU = function (req, res) {
    utilidade.gravarU(req, res);
};

exports.modificarU = function (req, res) {
    utilidade.modificarU(req, res);
};

exports.excluirU = function (req, res) {
    utilidade.excluirU(req, res);
};

exports.editarU = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/editarutilidade.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/editarutilidade.html', function (error, content) {
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/hospedagem.html', function (error, content) {
        //Customização para rodar Local
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/novohospedagem.html', function (error, content) {
        //Customização para rodar Local
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
     // Customização para rodar no Heroku
    // fs.readFile('./views/editarhospedagem.html', function (error, content) {
        //Customização para rodar Local
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

// ROTAS de Sobre

exports.indexS = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/sobre.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/sobre.html', function (error, content) {
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

exports.novoS = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/novosobre.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/novosobre.html', function (error, content) {
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

exports.criarS = function (req, res) {
    sobre.gravarS(req, res);
};

exports.modificarS = function (req, res) {
    sobre.modificarS(req, res);
};

exports.excluirS = function (req, res) {
    sobre.excluirS(req, res);
};

exports.editarS = function (req, res) {
     // Customização para rodar no Heroku
    // fs.readFile('./views/editarsobre.html', function (error, content) {
        //Customização para rodar Local
    fs.readFile('../views/editarsobre.html', function (error, content) {
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
