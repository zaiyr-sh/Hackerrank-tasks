function hackerrankInString(s) {
    let hackerRank = "h,a,c,k,e,r,r,a,n,k".split(',');
    s = s.split("")
    let hackerRankLength = hackerRank.length;
    let sLength = s.length;
    for(let i = 0; i < hackerRankLength; i++){
        for(let j = 0; j < sLength; j++){
            if(s[j] === hackerRank[i]){
                hackerRank.splice(i,1);
                s.splice(0,j)
                hackerRankLength = hackerRank.length;
                sLength = s.length;
                j = 0;
                i = 0;
            }
        }
    }
    if(!hackerRank.length){
        return "YES";
    } else {
        return "NO";
    }
    return hackerRank
}

console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"))
