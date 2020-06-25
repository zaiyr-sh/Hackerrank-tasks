function pangrams(s) {
    let alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(',');
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < alphabet.length; j++){
            if(s[i] === alphabet[j]){
                alphabet.splice(j,1);
            }
        }
    }
    if(!alphabet.length){
        return "pangram";
    } else {
        return "not pangram";
    }

}

console.log(pangrams("The quick brown fox jumps over the lazy dog"))