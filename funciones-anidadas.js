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