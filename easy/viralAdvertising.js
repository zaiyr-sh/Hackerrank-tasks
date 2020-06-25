function viralAdvertising(n) {
    let like = 2;
    let previousLike = 2;
    let count = 0;
    for(let i = 0; i < n; i++){
        count = count + like;
        like++
    }
    return count;

}

console.log(viralAdvertising(5))
