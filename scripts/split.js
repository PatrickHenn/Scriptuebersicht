// Nummern in gerade und ungerade aufteilen
function split(input) {
  const even = [];
  const odd = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      even.push(input[i]);
    } else {
      odd.push(input[i]);
    }
  }
  return { even, odd };
}

module.exports = { split };
