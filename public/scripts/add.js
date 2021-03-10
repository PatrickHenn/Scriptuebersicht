// add input
// eslint-disable-next-line no-unused-vars
function add() {
  const mi = document.createElement('input');
  mi.setAttribute('type', 'text');
  mi.setAttribute('value', '');
  mi.setAttribute('name', 'input');
  const memb = document.getElementById('inputFields');
  memb.appendChild(mi);
}
