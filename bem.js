var botao = document.getElementById("confirmacao");

botao.addEventListener('click', () => {
    //pegar a pergunta
    var pegarPergunta = document.getElementById("pergunta").value;
    if (pegarPergunta == "") {
        alert("Faça a sua pergunta!");
    } else {
        console.log(pegarPergunta)
    }
    //pegando o número
    var petalas = document.getElementById("numero").value;
    if (petalas == "") {
        alert("Escolha um número!")
    } else {
        console.log(petalas)
    }
})