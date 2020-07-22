function icecreamParlor(m, arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if((arr[i] + arr[j]) === m){
                result.push(++i)
                result.push(++j)
            }
        }
    }
    return result
}

console.log(icecreamParlor(4, [1, 4, 5, 3, 2]));