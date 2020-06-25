function insertionSort2(n, arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                arr[j] = arr[i]
                arr[i] = arr[j]
            }
        }
    }
    return arr
}

console.log(insertionSort2(6, [1, 4, 3, 5, 6, 2]))