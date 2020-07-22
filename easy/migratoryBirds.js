function migratoryBirds(arr) {
    let count = 0;
    let value = 100000000000000;
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                if(arr[j] < value){
                    count++
                    value = arr[i];
                }
            }
        }        
    }
    return value
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1 ,3, 4]));