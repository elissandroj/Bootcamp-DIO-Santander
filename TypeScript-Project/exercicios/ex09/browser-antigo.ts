export {} // Para não reclamar de variáveis duplicadas
 let buttonTeste = document.getElementById("button");

    buttonTeste?.addEventListener('click', () => {
       console.log('funcionou')
    })

// O termo "?" foi adicionado no JavaScript 2020
// Veja o app.js para saber como o TypeScript copila isso para o JS de browsers antigos entenderem