function serviceLane(n, cases) {
    let sortArr = [];
    let result = [];
    for(let i = 0; i < cases.length; i++){
        for(let j = cases[i][0]; j <= cases[i][1]; j++){
            sortArr.push(n[j])

            if(cases[i][1] - 1 === j) {
                sortArr.sort((a, b) => a - b);
                result.push(sortArr[0]);
                sortArr = [];
            }
        }
    }
    return result
    // for(let i = cases[0]; i <= cases[cases.length - 1]; i++){
    //     result.push(n[i])
    // }
    // console.log(result.sort((a, b) => a - b)[0]);
}

console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7]]));