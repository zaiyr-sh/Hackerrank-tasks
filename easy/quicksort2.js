function quickSort(arr) {
    let pivotElement = arr[0];
    arr.splice(0,1);
    let leftArr = [];
    let rightArr = [];
    for(let i = 0 ; i < arr.length; i++){
        if(pivotElement > arr[i]){
            leftArr.push(arr[i])
        }
        if(pivotElement < arr[i]){
            rightArr.push(arr[i])
        }
    }
    return leftArr.concat(pivotElement).concat(rightArr)
}

console.log(quickSort([4,5,3,7,2]))