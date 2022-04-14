function insert(num) {
    document.querySelector("#resultado").innerHTML += num
}

function clean() {
    document.querySelector("#resultado").innerHTML = ""
}

function back() {
    var resultado = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.querySelector("#resultado").innerHTML
    if (resultado) {
        document.querySelector("#resultado").innerHTML = eval(resultado)
    } else {
        alert("Nada para calcular")
    }
}