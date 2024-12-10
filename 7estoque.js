let produtos = [
    { nome: "Produto 1", preco: 10.5, quantidade: 20 },
    { nome: "Produto 2", preco: 15.3, quantidade: 30 },
    { nome: "Produto 3", preco: 8.9, quantidade: 50 }
];

function calcularValorEstoque(produtos) {
    let valorTotal = 0;
    for (let produto of produtos) {
        valorTotal += produto.preco * produto.quantidade;
    }
    return valorTotal;
}

console.log("Valor total do estoque: R$ " + calcularValorEstoque(produtos).toFixed(2));
