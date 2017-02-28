function masaCorporal() {
	var nombre = document.getElementById('name').value;
	var peso = document.getElementById('peso').value;
	var altura = (document.getElementById('altura').value)/100;
	var resultado = Math.round(peso/(Math.pow(altura,2)));
	
	document.getElementById('name').value = "";
	document.getElementById('peso').value = "";
	document.getElementById('altura').value = "";
	
	event.preventDefault();
	if (nombre !="" && peso != "" && altura != "" )
	{document.getElementById('salida').innerHTML = resultado;}
	else {document.getElementById('salida').innerHTML = 'Error';}

	};