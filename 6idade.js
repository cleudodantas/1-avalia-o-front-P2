let pessoas = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
    pessoas.push({ nome, idade });
}

function exibirMaioresDeIdade(lista) {
    console.log("Pessoas com mais de 18 anos:");
    for (let pessoa of lista) {
        if (pessoa.idade > 18) {
            console.log(pessoa.nome);
        }
    }
}

exibirMaioresDeIdade(pessoas);
