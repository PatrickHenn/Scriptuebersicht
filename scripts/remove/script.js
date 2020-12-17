//Entfernt Ausrufezeichen - removeExclamationMarksFromEnd

function remove(_string) {
  let range = /^[aA-zZ!"§$%&/()=?!*#+.,:;-_<> ]*$/gm;
  if (_string.match(range)) {
    while (_string[_string.length - 1] === "!") {
        _string = _string.slice(0, -1);
    }
  } else {
    _string = 'invalid string'
    }
    return _string;
}

module.exports = { remove };
