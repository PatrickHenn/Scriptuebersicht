// calculator
// let input = 0;
let tmp = 0;
let save = 0;
let sign = '';

function number(x) {
  const input = document.getElementById('anzeige').value;
  if (input === '0') {
    document.getElementById('anzeige').value = x;
    return x;
  }
  document.getElementById('anzeige').value += x;
}

function operation(o) {
  let input = document.getElementById('anzeige').value;
  if (o === '+') {
    document.getElementById('anzeige').value = '0';
    if (sign !== '') {
      tmp = parseFloat(tmp) + parseFloat(input);
    } else {
      tmp = parseFloat(input);
    }
    save = tmp;
    sign = o;
  }

  if (o === '-') {
    document.getElementById('anzeige').value = '0';
    if (sign !== '') {
      tmp = parseFloat(tmp) - parseFloat(input);
    } else {
      tmp = parseFloat(input);
    }
    save = tmp;
    sign = o;
  }
  if (o === '*') {
    document.getElementById('anzeige').value = '0';
    if (sign !== '') {
      tmp = parseFloat(tmp) * parseFloat(input);
    } else {
      tmp = parseFloat(input);
    }
    save = tmp;
    sign = o;
  }
  if (o === '/') {
    document.getElementById('anzeige').value = '0';
    if (sign !== '') {
      tmp = parseFloat(tmp) / parseFloat(input);
    } else {
      tmp = parseFloat(input);
    }
    save = tmp;
    sign = o;
  }
  if (o === '=') {
    document.getElementById('anzeige').value = operation(sign);
    document.getElementById('anzeige').value = save;
    sign = '';
  }

  if (o === 'ce') {
    document.getElementById('anzeige').value = '0';
    input = 0;
    tmp = 0;
    save = 0;
    sign = '';
  }
}

function operationc() {
  const lang = document.getElementById('anzeige').value;
  if (lang !== 0) {
    const neulang = lang.substring(0, lang.length - 1);
    document.getElementById('anzeige').value = neulang;
  }
}

function operationpro(value) {
  const pro = document.getElementById('anzeige').value;
  document.getElementById('anzeige').value = pro / 100;
}

function calculator() {
  const z = document.getElementById('anzeige').value;
  document.getElementById('anzeige').value = z * z;
}

module.exports = {
  calculator, operationpro, operationc, operation, number,
};

// nicht als erstes --- 0.
