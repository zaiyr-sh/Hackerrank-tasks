function sockMerchant(n, ar) {
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(ar[i] === ar[j]){
                count++
                ar.splice(j, 1)
                ar.splice(i, 1)
                i = 0;
                j = 0;
                n = ar.length
                continue;
            }
        }
    }
    return count;
}

console.log(sockMerchant(9, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]))