//Buchstaben zählen

function count(_input) {
	console.log({_input});
	let obj = {};
	let tmp = [];
	let safe = [];
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
		console.log('hier',tmp[i]);
		safe.push(tmp[i]);
	  console.log('safe',safe);
		obj = {};
	}
	return {tmp, safe}
}

module.exports ={count};
