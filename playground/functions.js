let name;

function greet(name) {
  document.querySelector('H1').innerText = `Hello ${name}`;
}

greet('Michael')