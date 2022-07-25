// *Variables
let des1 = 0.10, desc2 = 0.20, desc3, descuento, datoDescuento;

// *Entrada de datos
let consumo = parseFloat(prompt('Ingrese el monto de consumo'));

// *Proceso
if (consumo <= 100) {
  //calcular descuento 10%
  datoDescuento = '10%';
  descuento = consumo * des1;
} else if (consumo > 100 && consumo <= 200) {
  //calcular descuento 20%
  datoDescuento = '20%';
  descuento = consumo * desc2;
} else if (consumo > 200) {
  datoDescuento = '30%'
  descuento = consumo * desc3
} else {
  document.write('Ingrese un numero valido')
}

let montoDescuento = consumo - descuento;
let iva = montoDescuento * 0.19;
let totalPagar = montoDescuento + iva;

// *Salida de datos
document.write(`<pre>
    Consumo:             ${consumo}
    Descuento:           ${datoDescuento}
    Monto con Descuento: ${montoDescuento}
    Impuesto:            ${iva}
    ------------------------------
    Total a pagar:       ${totalPagar}
</pre>`);
