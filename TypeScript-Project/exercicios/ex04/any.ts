export {} // Para não reclamar de variáveis duplicadas
// Porque não devemos usar "any"
let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'testao';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2); // any somando booleano (true + true = 2)
}

somarString(valorString, valorString2);
somarString('ola ', ', como vai?');