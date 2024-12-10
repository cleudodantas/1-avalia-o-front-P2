let tarefas = [];

for (let i = 0; i < 5; i++) {
    let tarefa = prompt(`Digite a tarefa ${i + 1}:`);
    tarefas.push(tarefa);
}

alert("Tarefas: \n" + tarefas.join("\n"));

let tarefaConcluida = prompt("Qual tarefa você deseja marcar como concluída?");

let indice = tarefas.indexOf(tarefaConcluida);

if (indice !== -1) {
    tarefas.splice(indice, 1);
}

alert("Lista atualizada de tarefas: \n" + tarefas.join("\n"));
