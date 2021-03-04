//add input
 
function add() {
  const mi = document.createElement("input");
  mi.setAttribute('type', 'text');
  mi.setAttribute('value', '');
  mi.setAttribute('name', 'input');
  const memb = document.getElementById("inputFields");
  memb.appendChild(mi);
  console.log(memb)
}
