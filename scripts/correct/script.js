//Bestimmte Zahlen korrigieren - correctMistake

function correct (_string){
  console.log(_string);
  for (i=0; i<_string.length; i++) {  
    let _newString = _string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I'); 
    console.log(_string, _newString);
  return _newString
  }
}
module.exports ={ correct };
