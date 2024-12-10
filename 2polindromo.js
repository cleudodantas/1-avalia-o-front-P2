function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase();
    let tamanho = palavra.length;
    for (let i = 0; i < tamanho / 2; i++) {
        if (palavra[i] !== palavra[tamanho - 1 - i]) {
            return `A palavra "${palavra}" não é um palíndromo.`;
        }
    }
    return `A palavra "${palavra}" é um palíndromo.`;
}

let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");
alert(verificarPalindromo(palavra));
