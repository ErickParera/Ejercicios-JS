let numA = parseFloat(prompt("Ingrese el primer número:"));
let numB = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let resultado;
switch (operacion) {
    case "+":
        resultado = numA + numB;
        break;
    case "-":
        resultado = numA - numB;
        break;
    case "*":
        resultado = numA * numB;
        break;
    case "/":
        resultado = numB !== 0 ? numA / numB : "Error: División por cero.";
        break;
    default:
        resultado = "Operación inválida.";
}
alert(`El resultado es: ${resultado}`);
