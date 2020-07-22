// function runningTime(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let changePosition = arr[j - 1];
//                 arr[j - 1] = arr[j];
//                 arr[j] = changePosition;
//                 count++;
//                 i = 0;
//                 j = 0;
//             }
//         }
//     }
//     return count;
// }
function runningTime(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                count++;
            }
        }
    }
    return count;
}

// console.log(runningTime([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(runningTime([4, 4, 3, 4]));
console.log(runningTime([2, 1, 3, 1, 2]));
// console.log(runningTime([1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 9, 9]));
