function extraLongFactorials(n) {
    n = BigInt(n);
    let answer = BigInt(1);

    for (let i = n; i > 0; i--) {
       answer = answer * i
    }

    console.log(answer.toString());
}

console.log(extraLongFactorials(25))