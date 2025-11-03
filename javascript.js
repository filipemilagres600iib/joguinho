let jogando = true;

while (jogando) {
    let chute;
    let numSecreto = parseInt(Math.random() * 100 + 1); //o pc escolhe um número de 1 a 100.
    let jogarDenovo;
    let numTentativas;
    let tentativas;

    alert("BEM-VINDO(A) AO JOGUINHO DO NÚMERO SECRETO!");
    alert("O jogo consiste em: o pc vai escolher um número de 1 a 100, e você terá de acertá-lo. A cada tentativa errada, você recebe uma dica se o número secreto é maior ou menor que o número que você chutou. No final, o jogo te dirá quantas tentativas você fez.");

    let resposta = prompt("Você está pronto para começar? Responda 'sim' ou 'não':")

    while (resposta === null || resposta === "") {
        alert("Responda para começar.");
        resposta = prompt("Você está pronto para começar? Responda 'sim' ou 'não':");
    }

    resposta = resposta.toLowerCase();

    while (true) {
        if (!jogando) break;

        if (resposta === "sim") {
        alert("Então vamos começar!");
        break;
        } else if (resposta === "não") {
        alert("Volte quando estiver pronto.");
        jogando = false;//se digitar não, jogando passa a ser false, como o jogo só funciona se jogando for true, acaba o código. 
        break //eu preciso usar o break aq pra encerrar especificamente esse loop.
        } else {
        alert("Responda com 'sim' ou 'não'.");
        resposta = prompt("Você está pronto para começar? Responda 'sim' ou 'não':");
        continue;
        }
    }

    if (!jogando) break;

    alert("O computador está pensando...");

    chute = parseInt(prompt("Vamos lá. Dê seu chute:"));

    while (isNaN(chute)) {
        alert("Você precisa digitar um número...")
        chute = parseInt(prompt("Vamos lá. Dê seu chute:"));
    }
    tentativas = 1;

    while (chute !== numSecreto) {
        if (chute < numSecreto) {
            alert("O computador disse que o número secreto é maior.");
        } else {
            alert("O computador disse que o número secreto é menor.");
        }
        chute = parseInt(prompt("Vamos lá. Dê mais um chute:"));

        while (isNaN(chute)) {
        alert("Você precisa digitar um número...")
        chute = parseInt(prompt("Vamos lá. Dê mais um chute:"));
    }
        tentativas++
    }
}
    numTentativas = tentativas < 2 ? "tentativa" : "tentativas";

    if (chute === numSecreto) {
        alert(`Parabéns, você descobriu o número secreto (${numSecreto}) com ${tentativas} ${numTentativas}.`);
    }

    jogarDenovo = prompt("Você quer jogar novamente? Responda com 'sim'ou 'não'.");

    while (true) {
        if (jogarDenovo === null || jogarDenovo === "") {
            alert("Responda com 'sim'ou 'não'.");
            jogarDenovo = prompt("Você quer jogar novamente? Responda com 'sim'ou 'não'.");
        } if (jogarDenovo === "sim") {
            alert("Vambora de novo então!");
            break; //se digitar sim, reinicia o jogo.
        } else if (jogarDenovo === "não") {
            alert("Então até a próxima!");
           jogando = false; //se digitar não, jogando passa a ser false, como o jogo só funciona se jogando for true, acaba o código. 
           break //eu preciso usar o break aq pra encerrar especificamente esse loop.
        } else {
            alert("Responda com 'sim' ou 'não'.");
            jogarDenovo = prompt("Você quer jogar novamente? Responda com 'sim'ou 'não'.");
        }
    }