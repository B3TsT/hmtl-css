// *Variables
let vv = 0, igv = 0, pv = 0;

// *Entrada de datos
vv = parseFloat(prompt('Ingresa el valor de venta!'));

// *Proceso
igv = vv * 0.19;
pv = vv + igv;

// *Salida de datos
// document.write('El valor de venta es: ', vv, '<br>')
// document.write('El valor del IGV es de: ', igv, '<br>')
// document.write('El precio de venta es de: ', pv, '<br>')


/**
 * *Salida de datos
 * !EXTRA
 */
document.write(`<pre>
                Valor de Venta:  ${vv}
                IGV:             ${igv}
                Precio de Venta: ${pv}
                </pre>`);

console.log(`Valor de Venta:\t\t${vv}\nIGV:\t\t\t\t${igv}\nPrecio de Venta:\t${pv}`);
