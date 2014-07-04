if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'

var express = require('express'),
   routes = require('../routes'),
   ponto = require('../dados/dBFuncoes.js'),
   restaurante = require('../dados/dBFuncoesR.js'),
   transporte = require('../dados/dBFuncoesT.js'),
   utilidade = require('../dados/dBFuncoesU.js');


var app = module.exports = express.createServer();

app.configure(function () {
   app.use(express.bodyParser());
   app.use(express.methodOverride());
   app.use(app.router);
   app.use('/css', express.static(__dirname + './../public/stylesheets'));
   app.use('/js', express.static(__dirname + './../public/javascripts'));
   app.use('/img', express.static(__dirname + './../public/images/'));
});

// Ambientes
app.configure('development', function () {
   app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
   }));
});
app.configure('production', function () {
   app.use(express.errorHandler());
});

// Rotas do Sistema
//Rotas dos pontos turisticos
app.get('/', routes.index);
app.get('/novo', routes.novo);
app.post('/criar', routes.criar);
app.get('/editar/:nom', routes.editar);
app.put('/modificar/:id', routes.modificar);
app.delete('/excluir/:nom', routes.excluir);
app.get('/lista/ponto', ponto.listar);
app.get('/lista/ponto/:nom', ponto.procurar);

// Rotas dos restaurantes
app.get('/R', routes.indexR);
app.get('/novoR', routes.novoR);
app.post('/criarR', routes.criarR);
app.get('/editarR/:nom', routes.editarR);
app.put('/modificarR/:id', routes.modificarR);
app.delete('/excluirR/:nom', routes.excluirR);
app.get('/lista/restaurante', restaurante.listarR);
app.get('/lista/restaurante/:nom', restaurante.procurarR);


// Rotas dos Transportes
app.get('/T', routes.indexT);
app.get('/novoT', routes.novoT);
app.post('/criarT', routes.criarT);
app.get('/editarT/:nom', routes.editarT);
app.put('/modificarT/:id', routes.modificarT);
app.delete('/excluirT/:nom', routes.excluirT);
app.get('/lista/transporte', transporte.listarT);
app.get('/lista/transporte/:nom', transporte.procurarT);

// Rotas das Utilidades Públicas
app.get('/U', routes.indexU);
app.get('/novoU', routes.novoU);
app.post('/criarU', routes.criarU);
app.get('/editarU/:nom', routes.editarU);
app.put('/modificarU/:id', routes.modificarU);
app.delete('/excluirU/:nom', routes.excluirU);
app.get('/lista/utilidade', utilidade.listarU);
app.get('/lista/utilidade/:nom', utilidade.procurarU);

app.listen(3000);
console.log("Servidor está executando na porta %d em modo de %s", app.address().port, app.settings.env);
