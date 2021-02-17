//Nummern in gerade und ungerade aufteilen

function split(input){
	let even = [];
	let odd = [];
	for (i=0; i<input.length; i++) {
		if (input[i] % 2 == 0){
			even.push(input[i]);
		}
		else{
			odd.push(input[i]);
		}
	}
	return {'even':even, 'odd':odd};
	}

module.exports ={ split };
