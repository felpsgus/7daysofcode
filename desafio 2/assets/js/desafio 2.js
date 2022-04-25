function enviar1() {
    var nome = document.querySelector('.q1').value
    var idade = document.querySelector('.q2').value
    var linguagem = document.querySelector('.q3').value
    
    document.querySelector('.resposta').innerHTML = "Olá " + nome + ", você tem " + idade + " anos e está aprendendo " + linguagem + "!"
    document.querySelector(".resposta").style.display = "block";
    document.querySelector(".q1").style.display = "none";
    document.querySelector(".q2").style.display = "none";
    document.querySelector(".q3").style.display = "none";
    document.querySelector(".p2").style.display = "flex";
    document.querySelector(".botao1").style.display = "none";
    document.querySelector(".botao2").style.display = "block";

    document.querySelector('.q4').placeholder = "Você gosta de estudar " + linguagem + "? Responda com SIM ou NÃO."
    document.querySelector(".q4").style.display = "block";
}

function enviar2() {
    var satisfacao = document.querySelector('.q4').value
    var r1 = "Muito bom! Continue estudando e você terá muito sucesso."
    var r2 = "Ahh que pena... Já tentou aprender outras linguagens?"

    if (satisfacao == "sim") {
        document.querySelector(".resposta2").innerHTML = r1;
    }else{
        document.querySelector(".resposta2").innerHTML = r2;
    }
    document.querySelector(".resposta2").style.display = "block";
    document.querySelector(".resposta").style.display = "none";
    document.querySelector(".q4").style.display = "none";
    document.querySelector(".botao2").style.display = "none";
}


