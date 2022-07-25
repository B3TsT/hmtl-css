let n = 0, print = '';

if (n !== 0) {
  if (n > 0) {
    if (n % 2 === 0) {
      print = `El numero ${n} es PAR POSITIVO`
    } else {
      print = `El numero ${n} es IMPAR POSITIVO`
    }
  } else {
    if (n % 2 === 0) {
      print = `El numero ${n} es PAR NEGATIVO`
    } else {
      print = `El numero ${n} es IMPAR NEGATIVO`
    }
  }
} else {
  print = `El numero ${n} es Neutro`
}
console.log(print)
