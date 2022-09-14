let output = document.getElementById("output");
let com = document.getElementById("comprimento");
let lar = document.getElementById("largura");
let alt = document.getElementById("altura");

let button = document.getElementById("button");

button.addEventListener("click", volumeHandle, false);


function volumeHandle(){
	let comprimento = parseInt(com.value);
	let largura = parseInt(lar.value);
	let altura = parseInt(alt.value);

	let volume = comprimento * largura * altura;

	if(largura > 0 && altura > 0){
		output.innerHTML = `${volume} metros <sup> 3 </sup>`;
	}
	else{
		output.innerHTML = "valor inválido"
	}

}