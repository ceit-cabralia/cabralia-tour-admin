if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'

var express = require('express'),
    routes = require('../routes'),
    ponto = require('../dados/dBFuncoes.js');

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
app.get('/', routes.index);
app.get('/novo', routes.novo);
app.post('/criar', routes.criar);
app.get('/editar/:nom', routes.editar);
app.put('/modificar/:id', routes.modificar);
app.delete('/excluir/:nom', routes.excluir);
app.get('/lista/ponto', ponto.listar);
app.get('/lista/ponto/:nom', ponto.procurar);


app.listen(3000);
console.log("Servidor está executando na porta %d em modo de %s", app.address().port, app.settings.env);