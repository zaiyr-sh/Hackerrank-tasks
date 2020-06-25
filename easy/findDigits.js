function findDigits(n) {
    let splitNum = Array.from(n.toString()).map(Number);
    let count = 0;
    for(let i = 0; i < splitNum.length; i++){
        if(n % splitNum[i] === 0){
            count++
        }
    }
    return count;
}

console.log(findDigits(1012))
