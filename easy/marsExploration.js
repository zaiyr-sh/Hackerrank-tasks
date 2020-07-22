function marsExploration(s) {
    let count = 0;
    let expectedSignal = "";
    for(let i = 0; i < s.length; i+=3){
        expectedSignal += "SOS";
    }
    expectedSignal = expectedSignal.split("");
    s = s.split("");
    for(let j = 0; j < s.length; j++){
        if(s[j] !== expectedSignal[j]){
            count++
        }
    }
    
    return count
}

console.log(marsExploration("SOSSPSSQSSOR"));
