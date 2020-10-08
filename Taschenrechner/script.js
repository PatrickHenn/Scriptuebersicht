//calculator
let input = 0;
let tmp = 0;
let save = 0;
let sign ='';

function number(x) {
	const input = document.getElementById("anzeige").value;
		 console.log({sign,save,tmp,input})
	if(input === '0'){
	return document.getElementById("anzeige").value = x; 
	}	
   document.getElementById("anzeige").value += x;
}


function operation(o){
	 const input = document.getElementById("anzeige").value;
	 console.log({sign,o,save,tmp,input})
	 if (o === '+'){
	   document.getElementById("anzeige").value = '0';
	     if (sign !== ''){
	       tmp = parseFloat(tmp) + parseFloat(input);
	     } else {
	       tmp = parseFloat(input);
	     }
	save = tmp;
	sign = o;
	console.log({sign,o,save,tmp,input})
	}
	
	console.log({sign,o,save,tmp,input})
	 if (o === '-'){
	   document.getElementById("anzeige").value = '0';
	     if (sign !== ''){
	       tmp = parseFloat(tmp) - parseFloat(input);
	     } else {
	       tmp = parseFloat(input);
	     }
	save = tmp;
	sign = o;
	console.log({sign,o,save,tmp,input})
	}
	console.log({sign,o,save,tmp,input})
	 if (o === '*'){
	   document.getElementById("anzeige").value = '0';
	     if (sign !== ''){
	       tmp = parseFloat(tmp) * parseFloat(input);
	     } else {
	       tmp = parseFloat(input);
	     }
	save = tmp;
	sign = o;
	console.log({sign,o,save,tmp,input})
	}
	console.log({sign,o,save,tmp,input})
	 if (o === '/'){
	   document.getElementById("anzeige").value = '0';
	     if (sign !== ''){
	       tmp = parseFloat(tmp) / parseFloat(input);
	     } else {
	       tmp = parseFloat(input);
	     }
	save = tmp;
	sign = o;
	console.log({sign,o,save,tmp,input})
	}
	 if (o === '='){
	 console.log({sign,o,save,tmp,input})
	 document.getElementById("anzeige").value = operation(sign);
	 document.getElementById("anzeige").value = save;
	 sign ='';
	 }
	 
	if (o ==='ce'){ 
	document.getElementById("anzeige").value = '0';
	let input = 0;
	let tmp = 0;
	let save = 0;
	let sign ='';
	console.log({sign,save,tmp,input})
	}
}




function operationc(){
	let lang = document.getElementById("anzeige").value;
	if (lang !== 0){
	let neulang = lang.substring(0, lang.length - 1);
	document.getElementById("anzeige").value = neulang; 
	console.log(neulang);
	}
}

function operationpro(value){
	let pro = document.getElementById("anzeige").value;
	document.getElementById("anzeige").value = pro / 100;
}

function operationhoch(){
	let z = document.getElementById("anzeige").value;
	document.getElementById("anzeige").value = z * z;
}

module.exports ={
		number,
		operationhoch,
		operationpro,
		operationc,
		operation
		 };
//nicht als erstes --- 0. geht nicht
