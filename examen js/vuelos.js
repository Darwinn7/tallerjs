let totalAdultos = 0;
let totalNinos = 0;
let guajiraPersonas = 0;
let guajiraDinero = 0;
let chicamochaPersonas = 0;
let chicamochaDinero = 0;
let llanosOrientalesPersonas = 0;
let llanosOrientalesDinero = 0;
let sumaDescuentos = 0;
let sumaNetoPagar = 0; 
let valorAdulto;
  let valorNino;
  let descuento;


while (true) {
  // Pedir información del cliente
  let nombreCliente = prompt("Ingrese el nombre del cliente:");
  let numAdultos = parseInt(prompt("Ingrese el número de adultos:"));
  let numNinos = parseInt(prompt("Ingrese el número de niños:"));
  let destino = prompt("Ingrese el destino (guajira, cañon del chicamocha, llanos orientales):");

  // Calcular subtotal
  
  switch (destino) {
    case "guajira":
      valorAdulto = 1980000;
      valorNino = valorAdulto * 0.6;
      break;
    case "cañon del chicamocha":
      valorAdulto = 1600000;
      valorNino = valorAdulto * 0.6;
      break;
    case "llanos orientales":
      valorAdulto = 1500000;
      valorNino = valorAdulto * 0.6;
      break;
    default:
      alert("Destino no válido");
      continue;
  }

  let subtotal = numAdultos * valorAdulto + numNinos * valorNino;

  // Calcular descuento
  if (numAdultos > 4 && numNinos > 2) {
    descuento = subtotal * 0.2;
  } else {
    descuento = 0;
  }

  // Calcular neto a pagar
  let netoPagar = subtotal - descuento;

  // Imprimir información del cliente
  console.log(`Nombre del cliente: ${nombreCliente}`);
  console.log(`Nombre del destino: ${destino}`);
  console.log(`Cantidad de adultos: ${numAdultos}`);
  console.log(`Cantidad de niños: ${numNinos}`);
  console.log(`Subtotal: ${subtotal}`);
  console.log(`Valor descuento: ${descuento}`);
  console.log(`Neto a pagar: ${netoPagar}`);

  // Actualizar variables totales
  totalAdultos += numAdultos;
  totalNinos += numNinos;
  switch (destino) {
    case "Guajira":
      guajiraPersonas += numAdultos + numNinos;
      guajiraDinero += netoPagar;
      break;
    case "Cañón del Chicamocha":
      chicamochaPersonas += numAdultos + numNinos;
      chicamochaDinero += netoPagar;
      break;
    case "Llanos Orientales":
      llanosOrientalesPersonas += numAdultos + numNinos;
      llanosOrientalesDinero += netoPagar;
      break;
  }
  sumaDescuentos += descuento;
  sumaNetoPagar += netoPagar;

  // Preguntar si desea continuar
  let respuesta = prompt("Desea continuar? (s/n):");
  if (respuesta.toLowerCase() !== "s") {
    break;
  }
}

// Imprimir información final
console.log(`Total de personas adultas: ${totalAdultos}`);
console.log(`Total de niños: ${totalNinos}`);
console.log(`Cantidad de personas que viajan para la Guajira: ${guajiraPersonas}`);
console.log(`Cantidad de personas que viajan para Cañón del Chicamocha: ${chicamochaPersonas}`);
console.log(`Cantidad de personas que viajan para los Llanos Orientales: ${llanosOrientalesPersonas}`);
console.log(`Suma de dinero de los viajes para la Guajira: ${guajiraDinero}`);
console.log(`Suma de dinero de los viajes para Cañón del Chicamocha: ${chicamochaDinero}`);
console.log(`Suma de dinero de los viajes para los Llanos Orientales: ${llanosOrientalesDinero}`);
console.log(`Suma de descuentos: ${sumaDescuentos}`);
console.log(`Suma de neto a pagar: ${sumaNetoPagar}`);