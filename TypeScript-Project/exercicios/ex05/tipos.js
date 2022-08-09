"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(3, 3));
console.log(somarValores('ola', ', tudo bem?'));
console.log(somarValores('que dia é hoje? ', 5));
