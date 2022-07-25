let v = 'u', print = '';

switch (v) {
  case 'a':
  case 'A':
  case 'e':
  case 'E':
  case 'i':
  case 'I':
  case 'o':
  case 'O':
  case 'u':
  case 'U':
    print = `${v} es VOCAL`;
    break;
  default:
    print = `${v} no es VOCAL`;
}

console.log(print)
