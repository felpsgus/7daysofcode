var numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);

var tentativas = 0

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    Chutar();
  }
})

function Chutar() {

  var resultado = document.querySelector(".resultado")

  var chute = parseInt(document.querySelector("#valor").value);

  if (chute > 10 || chute < 0) {

    resultado.innerHTML = "Digite somente valores de 0 a 10.";
    valor.value = ""

  } else if (chute == numeroSecreto) {

    resultado.innerHTML = "Acertou";

  } else if (chute < numeroSecreto) {

    tentativas++
    resultado.innerHTML = "Você errou, o numero secreto é maior que o valor inserido. Tente novamente.";
    valor.value = ""

  } else if (chute > numeroSecreto) {

    tentativas++
    resultado.innerHTML ="Você errou, o numero secreto é menor que o valor inserido . Tente novamente.";
    valor.value = ""
    
  }
  
  if (tentativas == 3) {
    document.querySelector(".resultado").innerHTML ="Que pena, você errou todas as suas tentativas. O número secreto era " + numeroSecreto + ". Mais sorte da próxima vez.";
  }
}

function jogarNovamente() {
  numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
  tentativas = 0;
  resultado.innerHTML = "";
  valor.value = "";
}