var fs = require('fs'),
   restaurante = require('../dados/dBFuncoesR.js'),
   ponto = require('../dados/dBFuncoes.js'),
   utilidade = require('../dados/dBFuncoesU.js');

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

// ROTAS de Utilidades Públicas
exports.indexU = function (req, res) {
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
