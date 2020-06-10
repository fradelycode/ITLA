/** @format */

window.onload = function () {
	let n1 = parseInt(prompt("Digite cuantas monedas de $1 peso tiene"));
	let n2 = parseInt(prompt("Digite cuantas monedas de $0.50 peso tiene"));
	let n3 = parseInt(prompt("Digite cuantas monedas de $0.25 peso tiene"));
	let n4 = parseInt(prompt("Digite cuantas monedas de $0.10 peso tiene"));
	let n5 = parseInt(prompt("Digite cuantas monedas de $0.05 peso tiene"));

	let centavos50 = n2 * 0.5;
	let centavos25 = n3 * 0.25;
	let centavos10 = n4 * 0.1;
	let centavos5 = n5 * 0.05;

	let total = n1 + centavos50 + centavos25 + centavos10 + centavos5;
	alert("Usted tiene: " + total + " " + "pesos");
};
