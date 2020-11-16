//Entfernt (noch alle) Ausrufezeichen

let newString = "";
function remove(_string){
  for (x=0;x<_string.length;x++){
    console.log(_string[x],x)
    if ( _string.length == x){}
    else{
    newString += string[x] 
    }
    console.log('hooo',newString);
  }
 return
}

//const log = removeExclamationMarksFromEnd(string);


module.exports ={ remove };
/*
! am ende entfernen dafür muss man das ende herausfinden durch length -1 und dann if ==! doppelt loopen und entfernen

Write a function removeExclamationMarksFromEnd, that accepts one parameter: inputString, a valid string.

The function should return a string. The string contains the inputString, but without an exclamation mark at the end.

Input: a string.

Output: a string that has no exclamation mark at the end.
*/
