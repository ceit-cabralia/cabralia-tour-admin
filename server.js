// ligando os modulos
var express = require('express')
  , routes = require('./routes')
  , fs = require('fs')
  ,DBModels = require('./models/DBModels.js');

var app = module.exports = express.createServer();

// Configuração
app.configure(function(){
 //app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
}); 

// Buscando diretorio dos nossos formularios
app.get('/', function(req, res) {
  fs.readFile('./public/pontosturisticos.html', function(error, content) {
    if (error) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });     
      res.end(content, 'utf-8');
          
    }
  });
});



// Faz um post chamando a função Gravar para cada formulario especifico
//chamando  a função de gravar para restaurantes
app.post('/cadastrarPT', function(req, res) {  
  var tipo = req.body.tipo;
  var nome = req.body.nome;  
  var endereco = req.body.endereco;  
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarTuristico(tipo,nome,endereco,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    });

app.post('/cadastrarR', function(req, res) {  
  var tipo = req.body.tipo;
  var nome = req.body.nome;  
  var endereco = req.body.endereco;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarRestaurante(tipo,nome,endereco,telefone,email,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    });

app.post('/cadastrarH', function(req, res) {  
    
   
    
  var tipo = req.body.tipo;
  var nome = req.body.nome;  
  var endereco = req.body.endereco;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarHospedagem(tipo,nome,endereco,telefone,email,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    });

app.post('/cadastrarU', function(req, res) {   
  var tipo = req.body.tipo;
  var nome = req.body.nome;  
  var telefone = req.body.telefone;
   var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarUtilidade(tipo,nome,telefone,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    });


app.post('/cadastrarT', function(req, res) {   
  var tipo = req.body.tipo;
  var nome = req.body.nome;    
  var telefone = req.body.telefone;  
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarTransporte(tipo,nome,telefone,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    });

    
/*
  //  Chamando a função de gravar para transportes
  if(req.url=='/transportes.html'){
  var tipo = req.body.tipo;
  var nome = req.body.nome;  
  var telefone = req.body.telefone;  
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarTransporte(tipo,nome,telefone,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
            
        };
    
   if(req.url=='/utilidadepublica.html'){
  var tipo = req.body.tipo;
  var nome = req.body.nome;  
  var endereco = req.body.endereco;
  var telefone = req.body.telefone;
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarUtilidade(tipo,nome,endereco,telefone,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
  };   
    
    if(req.url=='/pontosturisticos.html'){
  var nome = req.body.pontosturisticos.nome;  
  var endereco = req.body.pontosturisticos.endereco;
  var descricao = req.body.pontosturisticos.descricao;
  // var imagens = req.body.imagens;
        DBmodels.Turistico(pontosturisticos.nome,pontosturisticos.endereco,pontosturisticos.descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    };
    
  if(req.url=='/hospedagem.html'){
  var tipo = req.body.tipo;
  var nome = req.body.nome;  
  var endereco = req.body.endereco;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarHospedagem(tipo,nome,endereco,telefone,email,descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    };
   
    if(req.url=='/index.html'){ 
  var descricao = req.body.descricao;
  // var imagens = req.body.imagens;
        DBModels.gravarSobre(descricao,function(err,user){
          if (err) throw err;
            res.redirect('/');
        });
    };
    
});
         
         
        */ 
        
         
         
 /*// NotaModel.gravarNota(nome,tipo,endereco,telefone,email,descricao, function(err, user) {
    DBModels.gravarsobre(nome,tipo,endereco,telefone,email,descricao, function(err, user) {
    if (err) throw err;
      res.redirect('/');
  });    
});
*/

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// endereco das rotas (no caso o INDEX)
app.get('/', routes.index);

app.listen(3000, function(){
  console.log("Servidor rodando na porta", app.address().port, app.settings.env);
});
