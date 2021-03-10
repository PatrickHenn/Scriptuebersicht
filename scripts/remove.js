// Entfernt Ausrufezeichen - removeExclamationMarksFromEnd

function remove(input) {
  const range = /^[aA-zZ!"§$%&/()=?!*#+.,:;-_<> ]*$/gm;
  let tmp = input;
  if (tmp.match(range)) {
    while (tmp[tmp.length - 1] === '!') {
      tmp = tmp.slice(0, -1);
    }
  } else {
    tmp = 'invalid string';
  }
  return tmp;
}

module.exports = { remove };
