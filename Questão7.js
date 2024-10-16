function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    
    if (colunasA !== linhasB) {
        throw new Error("Número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.");
    }

    
    const matrizResultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizResultado;
}

// Exemplo de uso:
const matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

const resultado = multiplicarMatrizes(matrizA, matrizB);
console.log(resultado); 

