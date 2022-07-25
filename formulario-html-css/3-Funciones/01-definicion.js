// * Parametro
function Saludar1(nombre) {
  // console.log(`${nombre}, Hola Mundo!`);
  return `${nombre}, Hola Return!`;
}
// * Argumento
// Saludar1('Francisco');

// let r = Saludar1('Francisco');
// console.log(r)

function Sumar(a = null, b = null) {
  if (a === null || b === null) {
    console.log('Error: debes enviar dos numeros');
    //Se coloca el return para indicar la finalizacion de la funcion
    return;
  }
  return a + b;
}
const s = Sumar()
console.log(s);
