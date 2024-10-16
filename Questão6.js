function substituirElemento(array, valorAntigo, novoValor) {
    return array.map(elemento => elemento === valorAntigo ? novoValor : elemento);
}

// Exemplo de uso:
const array = [1, 2, 3, 2, 4, 2];
const resultado = substituirElemento(array, 2, 5);
console.log(resultado); 
