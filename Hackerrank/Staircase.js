function staircase(n) {
    
    for (let i = 0; i < n; i++) {
    let espaco = '';

    for(let x = 0; x < (n - 1) - i; x++){
        espaco += ' ';
    }

    for(let y = n; y >= n - i; y--){
        espaco += '#';
    }
    
    console.log(espaco)
}
}