var botao = document.getElementById("confirmacao");

botao.addEventListener('click', () => {


        //pegar a pergunta
        var pegarPergunta = document.getElementById("pergunta").value;
        if (pegarPergunta == "") {
            alert("Faça a sua pergunta!");
        } else {
            console.log(pegarPergunta)
                //pegando o número
            var petalas = document.getElementById("numero").value;
            if (petalas == "") {
                alert("Escolha um número!")
            } else {
                var contagem = 0;

                for (contagem = 0; contagem < petalas; contagem++);

                var ultimoNumero = contagem.toString().split('').pop();

                if (ultimoNumero % 2 === 0) {
                    resut.innerHTML = `bem me quer`;
                } else {
                    resut.innerHTML = `mal me quer`;

                }
            }
        }


    })
    //limpar os campos
var botao2 = document.getElementById("limpar");
botao2.addEventListener('click', () => {
    document.getElementById("pergunta").value = "";
    document.getElementById("numero").value = "";
    resut.innerHTML = ""

})