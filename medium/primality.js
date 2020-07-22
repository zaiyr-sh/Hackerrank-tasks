function primality(n) {
    if(n === 1){
        return "Not prime"
    }
    for(let i = 2; i < (n - 1); i++){
        if(n % i == 0){
            return "Not prime"
        }
    }
    return "Prime"
}

console.log(primality(1));