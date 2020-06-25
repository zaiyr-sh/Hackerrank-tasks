function repeatedString(s, n) {
    if(s === "a"){
        return n;
    }
    s = s.split(""); 
    let count = 0;
    let i = 0;
    while(n !== s.length){
        s.push(s[i])
        i++
    }
    // for(let j = 0; j < s.length; j++){
    //     if(s[j] === "a") {
    //         count++
    //     }
    // }
    s = s.join("")
    let matches = ( s.match(/a/g) || [] ).length;
    return matches;
}

console.log(repeatedString("aba", 10))