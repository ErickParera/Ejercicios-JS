let precioDolares = parseFloat(prompt("Ingrese el precio del producto en dólares:"));
let precioPesos = precioDolares * 1130;
let precioFinal = precioPesos * 1.21; // IVA 21%
alert(`El precio final en pesos (con IVA) es: $${precioFinal.toFixed(2)}`);
