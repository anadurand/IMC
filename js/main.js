function masaCorporal() {
	var nombre = document.getElementById('name').value;
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

	document.getElementById('name').value = "";
	document.getElementById('peso').value = "";
	document.getElementById('altura').value = "";

	event.preventDefault();
	if ((nombre !="" && peso != "") && altura != "" ){
		validar(peso,altura);
	}else{
		document.getElementById('salida').innerHTML = 'Error, ingresar datos';
	}

	}

function validar(peso,altura){
	if(peso.match("[0-9]") && altura.match("[0-9]")){
		var resultado = Math.round(peso/(Math.pow(altura/100,2)));
		document.getElementById('salida').innerHTML = resultado;
	}else{
		document.getElementById('salida').innerHTML = 'Error, ingresar datos';
	}

}
