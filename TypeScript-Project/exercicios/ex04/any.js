"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Porque não devemos usar "any"
let valorAny;
valorAny = 3;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2); // any somando booleano (true + true = 2)
}
somarString(valorString, valorString2);
somarString('ola ', ', como vai?');
