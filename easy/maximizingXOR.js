function maximizingXor(l, r) {
    let count = 0;
    for(let i = l; i <= r; i++){
        for(let j = l; j <= r; j++){
            if((i ^ j) > count){
                count = i ^ j
            }
        }
    }
    return count
}

console.log(maximizingXor(10, 15));