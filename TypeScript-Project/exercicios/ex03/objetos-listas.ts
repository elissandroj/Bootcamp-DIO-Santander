export {} // Para não reclamar de variáveis duplicadas
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora',
}

pessoa.idade = 20

const andre: { nome: string, idade: number, profissao: string } = {
    nome: 'Andre',
    idade: 21,
    profissao: 'pintor'
}

const Paula: { nome: string, idade: number, profissao: string } = {
    nome: 'Paula',
    idade: 21,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
}

function lista(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

lista(monica.materias)