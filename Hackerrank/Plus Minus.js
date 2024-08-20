function plusMinus(arr) {
    let positivo = 0;
    let negativo = 0;
    let zero = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positivo ++;
        }
        else if(arr[i] < 0){
            negativo ++;
        }
        else{
            zero ++;
        }
    }
    
    positivo /= arr.length;
    negativo /= arr.length;
    zero /= arr.length
    
    console.log(positivo)
    console.log(negativo)
    console.log(zero)
}