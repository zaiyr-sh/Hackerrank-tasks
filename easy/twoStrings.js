function twoStrings(s1, s2) {
    let count = 0;
    for(let i = 0; i < s1.length; i++){
        if(s2.includes(s1[i])){
            count++
        }
    }
    // for(let i = 0; i < s1.length; i++){
    //     s2.match(/s1[i]/g) ? count++ : ""
    // }
    return count === 0 ? "NO" : "YES" 
}

console.log(twoStrings("aardvark", "apple"))