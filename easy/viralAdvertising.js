// function viralAdvertising(n) {
//     let like = 2;
//     let previousLike = 2;
//     let count = 0;
//     for(let i = 0; i < n; i++){
//         count = count + like;
//         like++
//     }
//     return count;

// }

// console.log(viralAdvertising(4))
function viralAdvertising(n) {
    n++
    let startedPoint = 5;
    let result = 0;
    let res = 0;
    let count = 0;
    for(let i = 1; i <= n; i++){
        if (i % 2 == 0){
            result += Math.floor(startedPoint / 2) * 3;
            startedPoint = result;
        } else {
            res += Math.floor(startedPoint / 2);
        }
    }

    return res;
}

console.log(viralAdvertising(5))

