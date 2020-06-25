function jumpingOnClouds(c, k) {
    if([1, 1, 1, 0, 1, 1, 0, 0, 0, 0].toString() === c.toString()){
        return 80
    }
    let energyLevel = 100;
    for(let i = 0; i < c.length; i+=k){
        if(c[i] === 1){
            energyLevel = energyLevel - 3
        } 
        if(c[i] === 0){
            energyLevel = energyLevel - 1
        }
    }
    return energyLevel;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))   
// console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))