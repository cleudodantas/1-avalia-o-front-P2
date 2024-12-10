let aluno = {
    nome: prompt("Digite o nome do aluno:"),
    notas: [],
    media: function () {
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }
};

for (let i = 0; i < 3; i++) {
    aluno.notas.push(parseFloat(prompt(`Digite a nota ${i + 1} de ${aluno.nome}:`)));
}

alert(`Aluno: ${aluno.nome}\nMédia: ${aluno.media().toFixed(2)}`);
