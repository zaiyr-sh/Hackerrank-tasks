function countingSort(arr) {
    arr = arr.sort((a, b) => a - b);
    let newArr = [];
    let count = 0;
    let len = arr.length
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(arr[i] === arr[j]){
                count++
            }
            if(arr[i] !== arr[j]){
                newArr.push(count);
                count = 0;
                arr.splice(0, i)
                i = 0;
                j = 0;
                len = arr.length
            }
        }
    }
    return newArr;

}

console.log(countingSort([1,1,3,2,1]))