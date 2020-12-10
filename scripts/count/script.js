//Buchstaben zählen

function count(_input) {
	let obj = {};			
  if(typeof _input === 'string') {
    for (let index = 0; index < _input.length; index++) {
      if (obj[_input[index]] === undefined){
	      obj[_input[index]] = 1;
      } else {
	      obj[_input[index]] += 1;
      }  
    }
  } else {
      for (i=0; i < _input.length; i++){
        for (x=0; x < _input[i].length; x++){
          if (obj[_input[i][x]] === undefined){
	          obj[_input[i][x]] = 1;
          } else {
	          obj[_input[i][x]] += 1;
          }  
        }
      }
    }
    return obj
	}

module.exports ={count};
