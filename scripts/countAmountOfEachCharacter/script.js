//Buchstaben zählen

function countAmountOfEachCharacter(_input) {		
	console.log('start');
	console.log({_input});
	let obj = {};
	let tmp = [];
	for (i=0; i < _input.length; i++){
		for (x=0; x < _input[i].length; x++){
				console.log(i);
			if (obj[_input[i][x]] == undefined){
				obj[_input[i][x]] = 1;
				console.log(_input[i][x]);
			} else {
						console.log(_input[i][x]);
				obj[_input[i][x]] += 1;
			}  
		}
		tmp[i] = obj;
		console.log(tmp[i]);
		obj = {};
	}
	return tmp
}

module.exports ={countAmountOfEachCharacter,};
