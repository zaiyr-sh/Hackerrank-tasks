function caesarCipher(s, k) {
    let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newStr = "";
    for(let i = 0; i < s.length; i++){
        if(s[i].match(/[a-zA-Z]/i)){
            for(let j = 0; j < alphabetLower.length; j++){
                if(s[i] === alphabetLower[j]){
                    newStr += alphabetLower[(j+k) % alphabetLower.length];
    
                }
                if(s[i] === alphabetUpper[j]){
                    newStr += alphabetUpper[(j+k) % alphabetUpper.length];
                }
            }
        } else{
            newStr += s[i]
        }
        
    }
    
    return newStr;  

}

console.log(caesarCipher("middle-Outz", 2))