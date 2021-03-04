//Bestimmte Zahlen korrigieren - correctMistake

const signMap = { 5: 'S', 1: 'I', 0: 'O'}

function correct (_string) {
  for(i=0; i<_string.length; i++){
    _string[i] = signMap[_string[i]] ? signMap[_string[i]] : _string[i];
  }
  for(i=0; i<_string.length; i++){
    let _newString = _string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I'); 
    console.log(_string, _newString);
  return _newString
  }
}

module.exports = { correct };
