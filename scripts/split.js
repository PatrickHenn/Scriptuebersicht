// Nummern in gerade und ungerade aufteilen
function split(input) {
  const even = [];
  const odd = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] % 2 === 0) {
      even.push(input[i]);
    } else {
      odd.push(input[i]);
    }
  }
  return { even, odd };
}

module.exports = { split };
