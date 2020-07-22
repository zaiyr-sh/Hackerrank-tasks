function breakingRecords(scores) {
    let countHighestScore = 0;
    let countLowerScore = 0;
    let highestScore = scores[0];
    let lowerScore = scores[0];
    for(let i = 0; i < scores.length; i++){
        if(highestScore < scores[i + 1]){
            highestScore = scores[i + 1];
            countHighestScore++
        }
        if(lowerScore > scores[i + 1]){
            lowerScore = scores[i + 1];
            countLowerScore++
        }
    }
    return [countHighestScore, countLowerScore];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));