//Entfernt Ausrufezeichen


function remove(_string){
  let newString = [];
  while (_string[_string.length - 1] === "!") {
    newString = _string.slice(0, -1);
    _string = _string.slice(0, -1);
  }
  console.log(_string,'neu',newString)
  return newString
}
module.exports ={ remove };
