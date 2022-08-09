"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora',
};
pessoa.idade = 20;
const andre = {
    nome: 'Andre',
    idade: 21,
    profissao: 'pintor'
};
const Paula = {
    nome: 'Paula',
    idade: 21,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
};
function lista(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
lista(monica.materias);
