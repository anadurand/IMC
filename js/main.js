var peso = prompt("Ingrese su peso en kg");
var estatura = prompt("Ingrese su estatura en metros");

function function_name(peso, estatura) {
	// body...
  var frase = "Su indice de masa corporal es: ";

  alert(frase + (peso/ Math.pow(estatura,2)).toFixed(2));
}

function_name(peso,estatura);
