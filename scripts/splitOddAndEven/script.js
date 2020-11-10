//Nummern in gerade und ungerade aufteilen

function splitOddAndEven(input){
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
	console.log('odd:',odd,'even:',even);
	return {'even':even, 'odd':odd};
	}

module.exports ={ splitOddAndEven };
