function hurdleRace(k, height) {
    let count = 0;
    for(let i = 0; i < height.length; i++){
        if(k < height[i]){
            if(count < height[i] - k){
                count = height[i] - k;
            }
        }
    }
    return count
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))