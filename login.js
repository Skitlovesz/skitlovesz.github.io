function valido(){
    var email=document.getElementById("email").value;
    var senha=document.getElementById("senha").value;
if(email=="alunos@cesmac.edu.br" && senha=="alunos2022"){
    alert("Login Realizado com Sucesso");
    return false;
}
else{
    alert("Email ou Senha inválidos!")
}
}
