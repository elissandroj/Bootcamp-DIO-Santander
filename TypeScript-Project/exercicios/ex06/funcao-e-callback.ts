export {} // Para não reclamar de variáveis duplicadas
function somarValoresNumericos(num1: number, num2: number): number // define o tipo que vai sair da funçao, mesmo colocando um .toString() ele vai dar erro e dizer que você está errado
{
    return num1 + num2;
}

console.log(somarValoresNumericos(1, 3))

function printaValoresNumericos(num1: number, num2: number): void // void é ausência de retorno, a função não precisa retornar nada pra ser validada
{
    console.log(num1 + num2) // console.log não define nada, uma variavel "teste = console.log(3)", será uma variavel undefined
}

function somarValoresNumericosETratar(num1: number, num2: number, callback: (numero: number) => number): number {
    let resultado = num1 + num2
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero:number): number {
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo))
