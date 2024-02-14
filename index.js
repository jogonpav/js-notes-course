// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function miFuncion() {
  console.log('¡Hola, mundo!');
}

miFuncion.miPropiedad = 'propiedad de función';
miFuncion.miMetodo = function() {
  console.log('Este es un método de función.');
}

console.log(miFuncion.miPropiedad); // Imprime: 'propiedad de función'
miFuncion.miMetodo(); // Imprime: 'Este es un método de función.'