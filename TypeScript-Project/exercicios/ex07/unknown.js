"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
// stringTest2 = unknownValor; // vai dar error
// unknown requer um teste para verificar o valor, é uma boa prática em relação ao "any"
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
