var frutas = []
var laticinios = []
var congelados = []
var doces = []

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      adicionar();
    }
})

function adicionar() {
    
    var alimento = document.getElementById("alimento").value;
    var categoria = document.getElementById("categorias").value;

    if (alimento === "") {
        alert("Escreva algum alimento antes de adicionar.");

    } else if (categoria == "frutas") {
        frutas.push(alimento)
        document.querySelector(".frutas").style.display = "flex"
        document.querySelector(".f").innerText = frutas

    } else if (categoria == "laticinios") {
        laticinios.push(alimento)
        document.querySelector(".laticinios").style.display = "flex"
        document.querySelector(".l").innerText = laticinios

    } else if (categoria == "congelados") {
        congelados.push(alimento)
        document.querySelector(".congelados").style.display = "flex"
        document.querySelector(".c").innerText = congelados

    } else if (categoria == "doces") {
        doces.push(alimento)
        document.querySelector(".doces").style.display = "flex"
        document.querySelector(".d").innerText = doces

    }    

    document.getElementById("alimento").value = ""
}

function excluir() {

    var alimento = document.getElementById("alimento").value;
    var categoria = document.getElementById("categorias").value;
    
    if (alimento === "") {
        alert("Escreva algum alimento antes de excluir.");

    } else if (categoria == "frutas") {
        var i = frutas.indexOf(alimento);
        frutas.splice(i, 1);
        document.querySelector(".f").innerText = frutas

    } else if (categoria == "laticinios") {
        var i = laticinios.indexOf(alimento);
        laticinios.splice(i, 1);
        document.querySelector(".l").innerText = laticinios

    } else if (categoria == "congelados") {
        var i = congelados.indexOf(alimento);
        congelados.splice(i, 1);
        document.querySelector(".c").innerText = congelados

    } else if (categoria == "doces") {
        var i = doces.indexOf(alimento);
        doces.splice(i, 1);
        document.querySelector(".d").innerText = doces
        
    } 

    document.getElementById("alimento").value = ""
}