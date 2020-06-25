function marcsCakewalk(calorie) {
    let sorting = calorie.sort(function(a, b){return b-a});
    let result = 0;
    for(let i = 0; i < sorting.length; i++){
        result += Math.pow(2, i) * sorting[i];
    }

    return result;
}

console.log(marcsCakewalk([7,4,9,6]))