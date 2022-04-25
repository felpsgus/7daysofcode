const front = document.querySelector("#front");
const back = document.querySelector("#back");

var area;

back.addEventListener("click", click1);
front.addEventListener("click", click1);

function click1(event) {
	const elemento = event.target;

	if (elemento.id == "front") {
		area = "Front-end";
		document.querySelector(".front").style.display = "flex";
		document.querySelector(".p1").style.display = "none";
	} else {
		area = "Back-end";
		document.querySelector(".back").style.display = "flex";
		document.querySelector(".p1").style.display = "none";
	}
	return area;
}

const react = document.querySelector("#react");
const vue = document.querySelector("#vue");

var tec;

react.addEventListener("click", click2);
vue.addEventListener("click", click2);

function click2(event) {
	const elemento = event.target;

	if (elemento.id == "react") {
		tec = "React";
		document.querySelector(".p3").style.display = "flex";
		document.querySelector(".front").style.display = "none";
	} else {
		tec = "Vue";
		document.querySelector(".p3").style.display = "flex";
		document.querySelector(".front").style.display = "none";
	}
	return tec;
}

const C = document.querySelector("#C");
const java = document.querySelector("#java");

C.addEventListener("click", click3);
java.addEventListener("click", click3);

function click3(event) {
	const elemento = event.target;

	if (elemento.id == "C") {
		tec = "C#";
		document.querySelector(".p3").style.display = "flex";
		document.querySelector(".back").style.display = "none";
	} else {
		tec = "Java";
		document.querySelector(".p3").style.display = "flex";
		document.querySelector(".back").style.display = "none";
	}
	return tec;
}

const areaEscolhida = document.querySelector("#areaEscolhida");
const fullstack = document.querySelector("#fullstack");

var escolha;

areaEscolhida.addEventListener("click", click4);
fullstack.addEventListener("click", click4);

function click4(event) {
	const elemento = event.target;

	if (elemento.id == "areaEscolhida") {
		escolha = area;
		document.querySelector(".p4").style.display = "flex";
		document.querySelector(".p3").style.display = "none";
		document.querySelector("label").innerHTML =
			"- Bom, vejo que você escolheu se especializar em " +
			escolha +
			". Quais tecnologias você gostaria de conhecer e aprender mais sobre?";
	} else {
		escolha = "Fullstack";
		document.querySelector(".p4").style.display = "flex";
		document.querySelector(".p3").style.display = "none";
		document.querySelector("label").innerHTML =
			"- Bom, vejo que você escolheu se tornar um Dev Fullstack. Quais tecnologias você gostaria de conhecer e aprender mais sobre?";
	}
	return escolha;
}

function click5() {
	document.querySelector(".p5").style.display = "flex";
	document.querySelector(".p4").style.display = "none";

	document.querySelector(".opcaoInicial").innerHTML =
		"- Você optou por iniciar com <strong>" +
		area +
		"</strong>, mais especificamente com " +
		tec +
		".";
	document.querySelector(".especializacao").innerHTML =
		"- Após este passo, você optou por se especializar em <strong>" +
		escolha +
		"</strong>.";

	const tecnolgy = document.querySelector("textarea").value;

	const list = tecnolgy.split(",");

	var HTMLcode = "";

	for (var i of list) {
		HTMLcode += "<li>• " + i + "</li>";
	}

	document.querySelector(".lista").innerHTML = HTMLcode;

	console.log(list);
}
