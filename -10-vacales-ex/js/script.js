

function vowelsAndConsonants(s) {
	let vowels = "aeiouAEIOU";

	let consonants = "";
	let counter = 0;
	let counterCon = 0;



	for (var i = 0; i < s.length; i++) {
		if (vowels.includes(s[i])) {
			console.log(s[i]);
			counter++;
		} else {
			consonants += s[i] + "\n";
			counterCon++;
		}
    }
    

    
	console.log("cantidad de vocales: " + counter);
	console.log(
		"cantidad de consonantes:" + counterCon + "\n" + consonants.trim()
	);
}

vowelsAndConsonants(prompt("Ingrese"));
