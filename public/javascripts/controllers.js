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