export {} // Para não reclamar de variáveis duplicadas
let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;


let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim'

let stringTest2: string = 'agora vai';
// stringTest2 = unknownValor; // vai dar error
// unknown requer um teste para verificar o valor, é uma boa prática em relação ao "any"
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}