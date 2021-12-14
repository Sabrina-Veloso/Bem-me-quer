var botao = document.getElementById("confirmacao");
var nada = null;
botao.addEventListener('click', () => {
    //pegar a pergunta
    const pegarPergunta = document.getElementById("pergunta");
    if (pegarPergunta == nada) {
        alert("Faça a sua pergunta!");
    } else {
        console.log(pegarPergunta)
    }
    //pegando o número
    const petalas = Number.document.getElementById("numero");
    if (petalas == nada) {
        alert("Escolha um número!")
    } else {
        console.log(petalas)
    }



})