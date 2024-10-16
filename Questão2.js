function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}
const pessoas = [
    { nome: 'Caio Jorge', idade: 13 },
    { nome: 'Dirk', idade: 19 },
    { nome: 'Renan', idade: 17 },
];
const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);

