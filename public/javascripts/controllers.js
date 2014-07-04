/*
Controllers
*/
function ListaCtrl($scope, $http) {
   $scope.nome = '';

   $http.get('/lista/ponto').success(function (data) {
      $scope.pontos = data;
   })

   $scope.select = function (ponto) {
      $scope.nome = ponto.nome;
   }

   $scope.excluir = function () {
      if ($scope.nome != '') {
         $http.delete('/excluir/' + $scope.nome)
            .success(function (data) {
               if (data == 'err') {
                  alert("Erro na Exclusão");
               } else {
                  alert("Ponto Turistico Excluido..");
               }
               document.location.reload(true);
            })
      }
   }
}

function NovoCtrl($scope, $http) {
   $scope.criar = function () {
      $http.post('/criar', $scope.ponto)
         .success(function (data) {
            if (data == 'err') {
               alert("Erro de gravação");
            } else {
               alert("Ponto Turistico cadastrado...");
            }
            $scope.ponto = {};
         })
   }
}

function EditarCtrl($scope, $http) {
   var caminho = document.URL;
   $scope._id = 0;
   $scope.ponto = {};

   caminho = caminho.substring(caminho.lastIndexOf('/'));
   $http.get('/lista/ponto' + caminho).success(function (data) {
      $scope._id = data[0]._id;
      $scope.ponto.nome = data[0].nome;
      $scope.ponto.endereco = data[0].endereco;
      $scope.ponto.descricao = data[0].descricao;
   })

   $scope.modificar = function () {
      $http.put('/modificar/' + $scope._id, $scope.ponto).success(function (data) {
         if (data == 'err') {
            alert("Erro na Alteração");
         } else {
            alert("Ponto Turistico Alterado..");
            window.location = '/';
         }
      })
   }
}

// CRUD de CONTROLLERS para Restaurantes

function ListaCtrlR($scope, $http) {
   $scope.nome = '';

   $http.get('/lista/restaurante').success(function (data) {
      $scope.restaurantes = data;
   })

   $scope.select = function (restaurante) {
      $scope.nome = restaurante.nome;
   }

   $scope.excluirR = function () {
      if ($scope.nome != '') {
         $http.delete('/excluirR/' + $scope.nome)
            .success(function (data) {
               if (data == 'err') {
                  alert("Erro na Exclusão de Restaurante");
               } else {
                  alert("Restaurante Excluido...");
               }
               document.location.reload(true);
            })
      }
   }
}

function NovoCtrlR($scope, $http) {
   $scope.criarR = function () {
      $http.post('/criarR', $scope.restaurante)
         .success(function (data) {
            if (data == 'err') {
               alert("Erro de gravação");
            } else {
               alert("Restaurante cadastrado...");
            }
            $scope.restaurante = {};
         })
   }
}

function EditarCtrlR($scope, $http) {
   var caminho = document.URL;
   $scope._id = 0;
   $scope.restaurante = {};

   caminho = caminho.substring(caminho.lastIndexOf('/'));
   $http.get('/lista/restaurante' + caminho).success(function (data) {
      $scope._id = data[0]._id;
      $scope.restaurante.tipo = data[0].tipo;
      $scope.restaurante.nome = data[0].nome;
      $scope.restaurante.endereco = data[0].endereco;
      $scope.restaurante.telefone = data[0].telefone;
      $scope.restaurante.descricao = data[0].descricao;
   })

   $scope.modificarR = function () {
      $http.put('/modificarR/' + $scope._id, $scope.restaurante).success(function (data) {
         if (data == 'err') {
            alert("Erro na Alteração");
         } else {
            alert("Restaurante Alterado...");
            window.location = '/R';
         }
      })
   }
}


// CRUD de CONTROLLERS para Restaurantes

function ListaCtrlT($scope, $http) {
   $scope.nome = '';

   $http.get('/lista/transporte').success(function (data) {
      $scope.transportes = data;
   })

   $scope.select = function (transporte) {
      $scope.nome = transporte.nome;
   }

   $scope.excluirT = function () {
      if ($scope.nome != '') {
         $http.delete('/excluirT/' + $scope.nome)
            .success(function (data) {
               if (data == 'err') {
                  alert("Erro na Exclusão do Transporte");
               } else {
                  alert("Transporte Excluido...");
               }
               document.location.reload(true);
            })
      }
   }
}

function NovoCtrlT($scope, $http) {
   $scope.criarT = function () {
      $http.post('/criarT', $scope.transporte)
         .success(function (data) {
            if (data == 'err') {
               alert("Erro de gravação");
            } else {
               alert("Transporte cadastrado...");
            }
            $scope.transporte = {};
         })
   }
}

function EditarCtrlT($scope, $http) {
   var caminho = document.URL;
   $scope._id = 0;
   $scope.transporte = {};

   caminho = caminho.substring(caminho.lastIndexOf('/'));
   $http.get('/lista/transporte' + caminho).success(function (data) {
      $scope._id = data[0]._id;
      $scope.transporte.tipo = data[0].tipo;
      $scope.transporte.nome = data[0].nome;
      $scope.transporte.telefone = data[0].telefone;
      $scope.transporte.descricao = data[0].descricao;
   })

   $scope.modificarT = function () {
      $http.put('/modificarT/' + $scope._id, $scope.transporte).success(function (data) {
         if (data == 'err') {
            alert("Erro na Alteração");
         } else {
            alert("Transporte Alterado...");
            window.location = '/T';
         }
      })
   }
}

// CRUD de CONTROLLERS para Utilidades Públicas
function ListaCtrlU($scope, $http) {
   $scope.nome = '';

   $http.get('/lista/utilidade').success(function (data) {
      $scope.utilidades = data;
   })

   $scope.select = function (utilidade) {
      $scope.nome = utilidade.nome;
   }

   $scope.excluirU = function () {
      if ($scope.nome != '') {
         $http.delete('/excluirU/' + $scope.nome)
            .success(function (data) {
               if (data == 'err') {
                  alert("Erro na Exclusão da Utilidadae Pública");
               } else {
                  alert("Utilidade Pública Excluido...");
               }
               document.location.reload(true);
            })
      }
   }
}

function NovoCtrlU($scope, $http) {
   $scope.criarU = function () {
      $http.post('/criarU', $scope.utilidade)
         .success(function (data) {
            if (data == 'err') {
               alert("Erro de Cadastro da Utilidade Pública");
            } else {
               alert("Utilidadae Pública cadastrado...");
            }
            $scope.utilidade = {};
         })
   }
}

function EditarCtrlU($scope, $http) {
   var caminho = document.URL;
   $scope._id = 0;
   $scope.utilidade = {};

   caminho = caminho.substring(caminho.lastIndexOf('/'));
   $http.get('/lista/utilidade' + caminho).success(function (data) {
      $scope._id = data[0]._id;
      $scope.utilidade.tipo = data[0].tipo;
      $scope.utilidade.nome = data[0].nome;
      $scope.utilidade.endereco = data[0].endereco;
      $scope.utilidade.telefone = data[0].telefone;
      $scope.utilidade.descricao = data[0].descricao;
   })

   $scope.modificarU = function () {
      $http.put('/modificarU/' + $scope._id, $scope.utilidade).success(function (data) {
         if (data == 'err') {
            alert("Erro na Alteração da utilidade Pública");
         } else {
            alert("Utilidade Pública Alterado...");
            window.location = '/U';
         }
      })
   }
}
