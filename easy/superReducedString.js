// ! govnocode (fix) 

function superReducedString(s) {
    s = s.split("");
    let n = s.length;
    for(let i = 0; i < n; i++){
            if(s[i] === s[i + 1]){
                s.splice(i + 1, 1)
                s.splice(i, 1)
                i = 0;
                n = s.length
                break
            }
            
    }
    // for(let i = 0; i < n; i++){
    //     if(s[i] === s[i + 1]){
    //         s.splice(i + 1, 1)
    //         s.splice(i, 1)
    //         i = 0;
    //         n = s.length
    //         continue;
    //     }
// }
    if(s.length !== 0 ) {
        return s.join("");
    } else {
        return "Empty String";
    }
}
console.log(superReducedString("baab"))