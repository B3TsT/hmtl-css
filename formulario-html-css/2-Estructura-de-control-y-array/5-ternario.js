// *Explicacion
// let n = -5;
// let r = (n > 0) ? 'Es Positivo' : 'Es negativo';

// *Ejemplo con el ejercico de vocales y ternario
let v = 'y'
let r = (v === 'a' || v === 'A') ? `${v} es VOCAL`
  : (v === 'e' || v === 'E') ? `${v} es VOCAL`
    : (v === 'i' || v === 'I') ? `${v} es VOCAL`
      : (v === 'o' || v === 'O') ? `${v} es VOCAL`
        : (v === 'u' || v === 'U') ? `${v} es VOCAL`
          : `${v} no es VOCAL`;

console.log(r)
