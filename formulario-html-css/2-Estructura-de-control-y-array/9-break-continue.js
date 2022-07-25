let c = 0;
while (c < 10) {
  c++;
  if (c === 5) {
    // console.log('Termina el bucle')
    // break;
    console.log('Salta a siguiente linea')
    continue;
  }
  console.log(c);
}
