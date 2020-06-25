function lonelyinteger(a) {
    let uniqueNum = null;
    let count = 0;
    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[i] === a[j]){
                break
            } 
        }
        if(count === 0){
            uniqueNum = a[i]
        }
    }
    return uniqueNum
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))