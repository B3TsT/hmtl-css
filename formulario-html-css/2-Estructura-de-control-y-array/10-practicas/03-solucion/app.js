//Variables
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = [];
let impares = [];
let numeroRandom = 0;

// proceso
for (let dato of array) {
  numeroRandom = parseInt(Math.random() * 100);
  let r = dato * numeroRandom;
  if (r % 2 === 0) {
    console.log(`${dato} x ${numeroRandom} = ${r}`)
    pares.push(r)
  } else {
    console.log(`${dato} x ${numeroRandom} = ${r}`)
    impares.push(r)
  }
}
//salida
console.log('ARRAY DE PARES ', pares)
console.log('ARRAY DE IMPARES: ', impares)
