function cutTheSticks(arr) {
    let result = []
    arr.sort((a, b) => a - b);
    result.push(arr.length)
    for(let i = 1; i < arr.length; i++){
        if (arr[i] != arr[i-1]) {
            result.push(arr.length - i)
        }
    }
    return result; 
    // let smallValue = arr[0];
    // let len = arr.length;
    // let result = [];
    // result.push(len)
    // for(let i = 0; i < len; i++){
    //     arr[i] = arr[i] - smallValue;
    //     if ((arr[i]) === 0) {
    //         arr.splice(i, 1);
    //         len = arr.length;
    //         i--
    //     }
    //     if((len - 1 === i) && (arr.length !== 0) && (len !== 0)) {
    //         result.push(len);
    //         i = 0;
    //     }
    // }

}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));