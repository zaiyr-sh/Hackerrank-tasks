function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let i = 0; i < arr.length; i++){
        primaryDiagonal += arr[i][i];
    }
    for(let j = 0; j < arr.length; j++){
        secondaryDiagonal += arr[j][(arr.length - 1) - j];
    }
    let sum = primaryDiagonal - secondaryDiagonal;
    return Math.abs(sum);
}

console.log(diagonalDifference(
    [
        [1,2,3],
        [4,5,6],
        [9,8,9]
    ]
))