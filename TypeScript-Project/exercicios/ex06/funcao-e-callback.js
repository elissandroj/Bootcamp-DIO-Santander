"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somarValoresNumericos(num1, num2) {
    return num1 + num2;
}
console.log(somarValoresNumericos(1, 3));
function printaValoresNumericos(num1, num2) {
    console.log(num1 + num2); // console.log não define nada, uma variavel "teste = console.log(3)", será uma variavel undefined
}
function somarValoresNumericosETratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
