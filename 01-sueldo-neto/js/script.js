/**
 * /* Inicio de declaracion de variables
 *
 * @format
 */
/*Al entrar todo el codigo en esta funcion la pagina primero carga tu 
pgroma de javascript */

window.onload = function () {
	/*Inicio declarcion de variables*/

	let suel1 = prompt("Entre Sueldo 1");
	let porc1 = prompt("Entre prorcentaje 1");
	/* Fin de declaracion de variables*/

	/*inicio formula de sacar el porcentaje*/

	let total1 = (suel1 * porc1) / 100;
	let neto1 = suel1 - total1;
	/*fin formula de sacar el porcentaje*/

	/*Impresion en pantalla del resultado*/

	alert("El sueldo neto 1 es: " + neto1);
	/* fin impresion en la pantalla*/

	/*Esto solo imprime el resultado en el HTML*/

	document.getElementById("sueldo1").innerHTML = neto1;

	/*-----------------------------------------------------∂*/

	/*--Todo esto es lo mismo de arriba para sueldo 2-3-----∂*/

	/*-----------------------------------------------------∂*/

	/*Inicio declarcion de variables*/

	let suel2 = prompt("Entre Sueldo 2");
	let porc2 = prompt("Entre prorcentaje 2");
	/* Fin de declaracion de variables*/

	/*inicio formula de sacar el porcentaje*/

	let total2 = (suel2 * porc2) / 100;
	let neto2 = suel2 - total2;
	/*fin formula de sacar el porcentaje*/

	/*Impresion en pantalla del resultado*/

	alert("El sueldo neto 2 es: " + neto2);
	/* fin impresion en la pantalla*/

	/*Esto solo imprime el resultado en el HTML*/

	document.getElementById("sueldo2").innerHTML = neto2;

	/*-------------------------------------------------*/

	/*---------------SUELDO 3----------------------*/

	/*-------------------------------------------------*/

	/*Inicio declarcion de variables*/

	let suel3 = prompt("Entre Sueldo 3");
	let porc3 = prompt("Entre prorcentaje 3");
	/* Fin de declaracion de variables*/

	/*inicio formula de sacar el porcentaje*/

	let total3 = (suel3 * porc3) / 100;
	let neto3 = suel3 - total3;
	/*fin formula de sacar el porcentaje*/

	/*Impresion en pantalla del resultado*/

	alert("El sueldo neto 3 es: " + neto3);
	/* fin impresion en la pantalla*/

	/*Esto solo imprime el resultado en el HTML*/

	document.getElementById("sueldo3").innerHTML = neto3;
};
