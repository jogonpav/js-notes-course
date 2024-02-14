
/*****Nested funtions******/
function externa(x) {
  function interna(y) {
      return x + y;
  }
  
  return interna;
}

// Crear una función anidada con la función externa
var funcionAnidada = externa(5);

// Llamar a la función anidada
var resultado = funcionAnidada(3); // Devuelve 8
console.log(resultado);



/*****
 * Properties and methods of functions 
 * can be passed to an object:
 * ******/

function a() {
  this.nombre = "Ejemplo";
  this.saludar = function() {
      console.log("Hola, " + this.nombre + "!");
  };
}

const obj = {};
a.call(obj);

// Ahora, obj tiene propiedades y métodos de la función a
console.log(obj.nombre);  // Imprime "Ejemplo"
obj.saludar();  // Imprime "Hola, Ejemplo



/*****
 *Return functions
 * ******/

function crearFuncionMultiplicadora(factor) {
  // Esta función devuelve otra función que multiplica su argumento por el factor proporcionado
  return function(numero) {
      return numero * factor;
  };
}

// Crear una función multiplicadora con un factor de 3
var multiplicarPor3 = crearFuncionMultiplicadora(3);

// Utilizar la función retornada
var resultado = multiplicarPor3(7); // Devuelve 21
console.log(resultado);