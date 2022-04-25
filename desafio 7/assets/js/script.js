const botoes = document.querySelector(".botoes")

botoes.addEventListener("click", geral)

function geral(event) {

    const elemento  = event.target

    var valor1      = document.querySelector(".valor1").value
    var valor2      = document.querySelector(".valor2").value


    if (valor1 == "" || valor2 == "") {
        alert("adicione os valores antes de selecionar as operações")

    } else if (elemento.id == "soma") {
        document.querySelector(".resultado").innerText = Number(valor1) + Number(valor2)

    } else if (elemento.id == "subtrair") {
        document.querySelector(".resultado").innerText = Number(valor1) - Number(valor2)

    } else if (elemento.id == "multiplicar") {
        document.querySelector(".resultado").innerText = Number(valor1) * Number(valor2)

    } else if (elemento.id == "dividir") {
        document.querySelector(".resultado").innerText = Number(valor1) / Number(valor2)

    }
}

function limpar() {
    document.querySelector(".resultado").innerText = ""
    document.querySelector(".valor1").value = ""
    document.querySelector(".valor2").value = ""

}

function sair() {
    document.querySelector(".corpo").style.display = "none"
    document.querySelector(".despedida").style.display = "block"

}