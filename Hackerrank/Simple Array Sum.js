function simpleArraySum(ar) {
    let total = 0;
    for (let i = 0; i < ar.length; i++) { 
        total += ar[i];
        console.log(ar[i]); 
    }
    return total; 
}