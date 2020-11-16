//Entfernt (noch alle) Ausrufezeichen


function remove(_string){
  let newString = "";
  for (x=0;x<_string.length;x++){
    console.log(_string[x],x)
    if ( _string.length == x){}
    else{
    newString += _string[x]
   console.log('hooo',newString); 
    }
    console.log('hooo',newString);
  }
 return newString
}
/*let _string ="dasdsa!"
const log = remove(_string);

    console.log('log',log);

module.exports ={ remove };
*/
/*
! am ende entfernen dafür muss man das ende herausfinden durch length -1 und dann if ==! doppelt loopen und entfernen

Write a function removeExclamationMarksFromEnd, that accepts one parameter: inputString, a valid string.

The function should return a string. The string contains the inputString, but without an exclamation mark at the end.

Input: a string.

Output: a string that has no exclamation mark at the end.
*/
