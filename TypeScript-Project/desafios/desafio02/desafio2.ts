export {} // Para não reclamar de variáveis duplicadas
// Como podemos melhorar o esse código usando TS? 
interface pessoa {
    nome: string,
    idade: number,
    profissao: string,
}
let pessoa11 = {} as pessoa;
pessoa11.nome = "maria";
pessoa11.idade = 29;
pessoa11.profissao = "atriz"

let pessoa22 = {} as pessoa
pessoa22.nome = "roberto";
pessoa22.idade = 19;
pessoa22.profissao = "Padeiro";

let pessoa33 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa44: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro",
}
