function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}
const pessoas = [
    { nome: 'Helena', idade: 4 },
    { nome: 'Ayla', idade: 2 },
    { nome: 'Martin', idade: 1 },
];
const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);

