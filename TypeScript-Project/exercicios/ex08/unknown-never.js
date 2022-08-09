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
// unknown requer um teste para verificar o valor, é uma boa prática em relação ao "any"
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
} // <- Essa é uma função do tipo void
// <- pode ser usado o tipo 'never' após os parâmetros, para configurar uma função que nunca é finalizada (o throw encerra a função)
jogaErro('deu erro', 500);
