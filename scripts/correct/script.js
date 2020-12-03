//Bestimmte Zahlen korrigieren - correctMistake

function correct (_string){
  console.log(_string);
  for (i=0; i<_string.length; i++) {  
    let _newString = _string.replace(/[5]/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I'); 
    console.log(_string, _newString);
  return _newString
  }
}
module.exports ={ correct };

//wieso geht es hier aber nicht auf dem localhost? 

let log = correct("5sS");
console.log('->',log);
/*

console.log(_string, newString);
Character recognition software is widely used to digitize printed texts.
When documents are digitized character recognition softwares often make mistakes.
Your task is to correct the errors in the digitized text.
You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
Write a function correctMistakes, that accepts one parameter: inputString, a valid string.

The function should return a string. The string contains the inputString with the corrections.

Input: a string.

Output: a string with the corrections.

Example:

Input: "0h!"
Iteration 1: "0h!" // next character is 0 => it is in the list of corrections => correct it (0 becomes O)
Iteration 2: "Oh!" // next character is h => it is NOT in the list of corrections => return it unchanged
Iteration 3: "Oh!" // next character is ! => it is NOT in the list of corrections => return it unchanged
Output: "Oh!" // return the string
*/
