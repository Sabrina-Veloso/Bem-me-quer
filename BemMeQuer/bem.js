const botao = document.getElementById("confirmacao");

botao.addEventListener('click', () => {
    //pegar a pergunta
    const pegarPergunta = document.getElementById("pergunta");
    if (pegarPergunta == null) {
        alert("Faça a sua pergunta!");
    } else {
        console.log(pegarPergunta)
    }
    //pegando o número
    const petalas = Number.document.getElementById("numero");
    if (petalas == null) {
        alert("Escolha um número!")
    } else {
        console.log(petalas)
    }



})