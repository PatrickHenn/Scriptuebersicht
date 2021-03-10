// Bestimmte Zahlen korrigieren - correctMistake

const signMap = { 5: 'S', 1: 'I', 0: 'O' };

function correct(input) {
  for (let i = 0; i < input.length; i += 1) {
    const tmp = input;
    // input[i] ist nicht erlaubt????
    tmp[i] = signMap[tmp[i]] ? signMap[tmp[i]] : tmp[i];
  }
  for (let i = 0; i < input.length; i += 1) {
    const newInput = input.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
    return newInput;
  }
  return correct;
}

module.exports = { correct };
