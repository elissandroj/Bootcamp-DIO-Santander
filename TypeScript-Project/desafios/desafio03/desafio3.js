"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let valor = document.getElementById('valor');
let campoSaldo = document.getElementById('campo-saldo');
let saldo = 0;
function somarAoSaldo(valor) {
    if (campoSaldo) {
        saldo += valor;
        campoSaldo.innerHTML = saldo.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    valor.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldo = 0;
        campoSaldo.innerHTML = saldo.toString();
    }
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(valor.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
