function validarH(){
  if (document.formhospedagem.nome.value==""){

    alert("o campo nome esta vazio");
    document.formhospedagem.hnome.focus();
    return false;

  }

  if (document.formhospedagem.hendereco.value=="") {

    alert("O campo endereço esta vazio");
    document.formhospedagem.hendereco.focus();
    return false;

  }

  if (document.formhospedagem.descricao.value=="") {

    alert("O campo descriçao esta vazio ");
    document.formhospedagem.descricao.focus();
    return false;

  }

  if (document.formhospedagem.htel.value=="") {

    alert("O campo telefone esta vazio");
    document.formhospedagem.htel.focus();
    return false;

  }

}
