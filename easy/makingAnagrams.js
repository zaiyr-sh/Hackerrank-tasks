function makeAnagram(a, b) {
    let count = 0;
    a = a.split("");
    b = b.split("");
    for(let i = 0; i < b.length; i++){
        if(!a.includes(b[i])){
            count++;
        }
    }
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            count++;
        }
    }
    return count;

}

console.log(makeAnagram('cde', 'abc'));