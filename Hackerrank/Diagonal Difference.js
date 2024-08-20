function diagonalDifference(arr) {
    let aux = 0;
    let aux2 = 0;
    let soma = 0;

    for(let i = 0; i < arr.length; i++){
        aux += arr[i][i];
        aux2 += arr[i][(arr.length - 1) - i];
    }

    soma = Math.abs(aux - aux2);
    return soma;
}