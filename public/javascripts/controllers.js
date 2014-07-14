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
                        alert("Ponto Turistico excluido com sucesso.");
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
                    alert("Ponto Turistico cadastrado com sucesso.");
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
        $scope.ponto.imagens = data[0].imagens;
        $scope.ponto.imagensD1 = data[0].imagensD1;
        $scope.ponto.imagensD2 = data[0].imagensD2;
        $scope.ponto.descricao = data[0].descricao;
    })

    $scope.modificar = function () {
        $http.put('/modificar/' + $scope._id, $scope.ponto).success(function (data) {
            if (data == 'err') {
                alert("Erro na Alteração");
            } else {
                alert("Ponto Turistico alterado com sucesso.");
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
                        alert("Restaurante excluido com sucesso.");
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
                    alert("Restaurante cadastrado com sucesso...");
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
        $scope.restaurante.imagens = data[0].imagens;
        $scope.restaurante.imagensD1 = data[0].imagensD1;
        $scope.restaurante.imagensD2 = data[0].imagensD2;
        $scope.restaurante.telefone = data[0].telefone;
        $scope.restaurante.descricao = data[0].descricao;
    })

    $scope.modificarR = function () {
        $http.put('/modificarR/' + $scope._id, $scope.restaurante).success(function (data) {
            if (data == 'err') {
                alert("Erro na Alteração");
            } else {
                alert("Restaurante alterado com sucesso.");
                window.location = '/R';
            }
        })
    }
}


// CRUD de CONTROLLERS para Transportes
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
                        alert("Transporte excluido com sucesso.");
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
                    alert("Transporte cadastrado com sucesso.");
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
        $scope.transporte.imagens = data[0].imagens;
        $scope.transporte.imagensD1 = data[0].imagensD1;
        $scope.transporte.imagensD2 = data[0].imagensD2;
        $scope.transporte.placa = data[0].placa;
        $scope.transporte.descricao = data[0].descricao;
    })

    $scope.modificarT = function () {
        $http.put('/modificarT/' + $scope._id, $scope.transporte).success(function (data) {
            if (data == 'err') {
                alert("Erro na Alteração");
            } else {
                alert("Transporte alterado com sucesso.");
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
                        alert("Erro na Exclusão da Utilidadade Pública");
                    } else {
                        alert("Utilidade Pública cxcluido com sucesso.");
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
                    alert("Utilidade Pública cadastrado com sucesso.");
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
        $scope.utilidade.imagens = data[0].imagens;
        $scope.utilidade.imagensD1 = data[0].imagensD1;
        $scope.utilidade.imagensD2 = data[0].imagensD2;
        $scope.utilidade.telefone = data[0].telefone;
        $scope.utilidade.descricao = data[0].descricao;
    })

    $scope.modificarU = function () {
        $http.put('/modificarU/' + $scope._id, $scope.utilidade).success(function (data) {
            if (data == 'err') {
                alert("Erro na Alteração da utilidade Pública");
            } else {
                alert("Utilidade Pública alterado com sucesso.");
                window.location = '/U';
            }
        })
    }
}

// CRUD de CONTROLLERS para hospedagens

function ListaCtrlH($scope, $http) {
    $scope.nome = '';

    $http.get('/lista/hospedagem').success(function (data) {
        $scope.hospedagens = data;
    })

    $scope.select = function (hospedagem) {
        $scope.nome = hospedagem.nome;
    }

    $scope.excluirH = function () {
        if ($scope.nome != '') {
            $http.delete('/excluirH/' + $scope.nome)
                .success(function (data) {
                    if (data == 'err') {
                        alert("Erro na Exclusão de hospedagem");
                    } else {
                        alert("hospedagem excluido com sucesso.");
                    }
                    document.location.reload(true);
                })
        }
    }
}

function NovoCtrlH($scope, $http) {
    $scope.criarH = function () {
        $http.post('/criarH', $scope.hospedagem)
            .success(function (data) {
                if (data == 'err') {
                    alert("Erro de gravação");
                } else {
                    alert("hospedagem cadastrado com sucesso.");
                }
                $scope.hospedagem = {};
            })
    }
}

function EditarCtrlH($scope, $http) {
    var caminho = document.URL;
    $scope._id = 0;
    $scope.hospedagem = {};

    caminho = caminho.substring(caminho.lastIndexOf('/'));
    $http.get('/lista/hospedagem' + caminho).success(function (data) {
        $scope._id = data[0]._id;
        $scope.hospedagem.tipo = data[0].tipo;
        $scope.hospedagem.nome = data[0].nome;
        $scope.hospedagem.endereco = data[0].endereco;
        $scope.hospedagem.imagens = data[0].imagens;
        $scope.hospedagem.imagensD1 = data[0].imagensD1;
        $scope.hospedagem.imagensD2 = data[0].imagensD2;
        $scope.hospedagem.telefone = data[0].telefone;
        $scope.hospedagem.descricao = data[0].descricao;
    })

    $scope.modificarH = function () {
        $http.put('/modificarH/' + $scope._id, $scope.hospedagem).success(function (data) {
            if (data == 'err') {
                alert("Erro na Alteração");
            } else {
                alert("hospedagem alterado com sucesso.");
                window.location = '/H';
            }
        })
    }
}
// CRUD de CONTROLLERS para Sobre

function ListaCtrlS($scope, $http) {
    $scope.nome = '';

    $http.get('/lista/sobre').success(function (data) {
        $scope.sobres = data;
    })

    $scope.select = function (sobre) {
        $scope.nome = sobre.nome;
    }

    $scope.excluirS = function () {
        if ($scope.nome != '') {
            $http.delete('/excluirS/' + $scope.nome)
                .success(function (data) {
                    if (data == 'err') {
                        alert("Erro na Exclusão do Sobre");
                    } else {
                        alert("Sobre excluido com sucesso.");
                    }
                    document.location.reload(true);
                })
        }
    }
}

function NovoCtrlS($scope, $http) {
    $scope.criarS = function () {
        $http.post('/criarS', $scope.sobre)
            .success(function (data) {
                if (data == 'err') {
                    alert("Erro de gravação");
                } else {
                    alert("Sobre cadastrado com sucesso.");
                }
                $scope.sobre = {};
            })
    }
}

function EditarCtrlS($scope, $http) {
    var caminho = document.URL;
    $scope._id = 0;
    $scope.sobre = {};

    caminho = caminho.substring(caminho.lastIndexOf('/'));
    $http.get('/lista/sobre' + caminho).success(function (data) {
        $scope._id = data[0]._id;

        $scope.sobre.imagens = data[0].imagens;
        $scope.sobre.nome = data[0].nome;
        $scope.sobre.mapa = data[0].nome;
        $scope.sobre.imagensD1 = data[0].nome;
        $scope.sobre.imagensD2 = data[0].nome;
    })

    $scope.modificarS = function () {
        $http.put('/modificarS/' + $scope._id, $scope.sobre).success(function (data) {
            if (data == 'err') {
                alert("Erro na Alteração");
            } else {
                alert("Sobre alterado com sucesso.");
                window.location = '/S';
            }
        })
    }
}