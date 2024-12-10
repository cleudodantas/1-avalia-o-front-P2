function calculadora(num1, num2, operacao) {
    if (operacao === "soma") {
        return num1 + num2;
    } else if (operacao === "subtracao") {
        return num1 - num2;
    } else if (operacao === "multiplicacao") {
        return num1 * num2;
    } else if (operacao === "divisao") {
        if (num2 === 0) {
            return "Erro: divisão por zero não é permitida.";
        }
        return num1 / num2;
    } else {
        return "Operação inválida. Utilize: soma, subtracao, multiplicacao ou divisao.";
    }
}
