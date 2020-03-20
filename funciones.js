
function empieza(){
document.getElementById('titulo').innerHTML= "Lista de la compra";
document.getElementById('titulo').innerHTML += " nueva";
document.getElementById('titulo').style.fontFamily= "Verdana";
}


function masCafe() {
	document.getElementById('lista').innerHTML += "<li> Café en grano </li>";
}

function masTe(){
	document.getElementById('lista').innerHTML += "<li>Té</li>";
}

function masVino() {
	document.getElementById('lista').innerHTML += "	<li>Vino</li>";
}

function masChoco() {
	document.getElementById('lista').innerHTML += "<li>Chocolate</li>";
}

function masQueso(){
	document.getElementById('lista').innerHTML += "<li>Queso</li>";	
}

function masPan(){
	document.getElementById('lista').innerHTML += "<li>Pan</li>";
}



function vaciar(){
	document.getElementById('lista').innerHTML = "";
}