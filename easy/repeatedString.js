function repeatedString(s, n) {
    let a = Math.floor(n / s.length);
    let matches = ( s.match(/a/g) ) ? ( s.match(/a/g) ).length : 0;
    let result = (a * matches);
    for(let i = 0; i < n - (a * s.length); i++){
        if(s[i] === 'a'){
            result++
        }
    }
    return result

    // if(s === "a"){
    //     return n;
    // }
    // s = s.split(""); 
    // let count = 0;
    // let i = 0;
    // while(n !== s.length){
    //     s.push(s[i])
    //     i++
    // }
    // s = s.join("")
    // let matches = ( s.match(/a/g) ).length;
    // return matches;
}

// console.log(repeatedString("aba", 10))
console.log(repeatedString("ceebbcb", 817723))
// console.log(repeatedString("gfcaaaecbg", 547602))