var db = require('../lib/db');

//Criação dos modelos de esquemas do Banco de Dados
//
//Definição do schema de cadastro Sobre Cabrália
var shem_sobre = new db.Schema({
  // imagens: String,
   descricao: String
});
// compilação do modelo de esquema sobre Cabrália
var Cabralia = db.mongoose.model('Cabralia', shem_sobre);
module.exports.gravarSobre = gravarSobre;
//
//Definição do schema de cadastro de Pontos Túristicos
var shem_turistico = new db.Schema({
   tipo: String,
   nome: {
      type: String,
      unique: true
   },
   endereco: String,
 //  imagens: String,
   descricao: String
});
// compilação do modelo de esquema dos pontos turísticos
var Turisticos = db.mongoose.model('Turisticos', shem_turistico);
module.exports.gravarTuristico = gravarTuristico;
//
//Definição do schema de cadastro de Hospedagens
var shem_hospedagem = new db.Schema({
   tipo: String,
   nome: {
      type: String,
      unique: true
   },
   endereco: String,
   telefone: String,
   email: String,
   //imagens: String,
   descricao: String
});
// compilação do modelo de esquema das hospedagens
var Hospedagens = db.mongoose.model('Hospedagens', shem_hospedagem);
module.exports.gravarHospedagem = gravarHospedagem;
//
//Definição do schema de cadastro de Restaurantes
var shem_restaurante = new db.Schema({
   tipo: String,
   nome: {
      type: String,
      unique: true
   },
   endereco: String,
   telefone: String,
   email: String,
   //imagens: String,
   descricao: String
});
// compilação do modelo de esquema dos restaurantes
var Restaurantes = db.mongoose.model('Restaurantes', shem_restaurante);
module.exports.gravarRestaurante = gravarRestaurante;
//
//Definição do schema de cadastro de Transportes
var shem_transporte = new db.Schema({
   tipo: String,
   nome: {
      type: String,
      unique: true
   },
   telefone: String,
 //  imagens: String,
   descricao: String
});
// compilação do modelo de esquema dos trasnportes
var Transportes = db.mongoose.model('Transportes', shem_transporte);
module.exports.gravarTransporte = gravarTransporte;
//
//Definição dp schema de cadastro de Utilidades Públicas
var shem_utilidade = new db.Schema({
   tipo: String,
   nome: {
      type: String,
      unique: true
   },
   endereco: String,
   telefones: String,
   //imagens: String,
   descricao: String
});
// compilação do modelo de esquema das utilidades publicas
var Utilidades = db.mongoose.model('Utilidades', shem_restaurante);
module.exports.gravarUtilidade = gravarUtilidade;



//Funções para gravação dos dados capturados dos formulário no MongoDB
//do formulário de Sobre Cabrália
function gravarSobre( descricao, callback) {
   var instance = new Cabralia();
   instance.imagens = imagens;
   instance.descricao = descricao;
   instance.save(function (err) {
      if (err) {
         callback(err);
      } else {
         callback(null, instance);
      }
   });
}
//
//do formulário de Pontos Turísticos
function gravarTuristico(tipo, nome, endereco, descricao, callback) {
   var instance = new Turisticos();
   instance.tipo = tipo;
   instance.nome = nome;
   instance.endereco = endereco;
 //  instance.imagens = imagens;
   instance.descricao = descricao;
   instance.save(function (err) {
      if (err) {
         callback(err);
      } else {
         callback(null, instance);
      }
   });
}
//
//do formulário de Hospedagens
function gravarHospedagem(tipo, nome, endereco, telefone, email, descricao, callback) {
   var instance = new Hospedagens();
   instance.tipo = tipo;
   instance.nome = nome;
   instance.telefone = telefone;
   instance.email = email;
   instance.endereco = endereco;
   //instance.imagens = imagens;
   instance.descricao = descricao;
   instance.save(function (err) {
      if (err) {
         callback(err);
      } else {
         callback(null, instance);
      }
   });
}
//
//do formulário de Restaurantes
function gravarRestaurante(tipo, nome, endereco, telefone, email,  descricao, callback) {
   var instance = new Restaurantes();
   instance.tipo = tipo;
   instance.nome = nome;
   instance.telefone = telefone;
   instance.email = email;
   instance.endereco = endereco;
  // instance.imagens = imagens;
   instance.descricao = descricao;
   instance.save(function (err) {
      if (err) {
         callback(err);
      } else {
         callback(null, instance);
      }
   });
}
//
//
//do formulário de Transportes
function gravarTransporte(tipo, nome, telefone,  descricao, callback) {
   var instance = new Transportes();
   instance.tipo = tipo;
   instance.nome = nome;
   instance.telefone = telefone;
  // instance.imagens = imagens;
   instance.descricao = descricao;
   instance.save(function (err) {
      if (err) {
         callback(err);
      } else {
         callback(null, instance);
      }
   });
}
//
//do formulário de Utilidades Públicas
function gravarUtilidade(tipo, nome, telefone,  descricao, callback) {
   var instance = new Utilidades();
   instance.tipo = tipo;
   instance.nome = nome;  
   instance.telefone = telefone;
  // instance.imagens = imagens;
   instance.descricao = descricao;
   instance.save(function (err) {
      if (err) {
         callback(err);
      } else {
         callback(null, instance);
      }
   });
}
//
