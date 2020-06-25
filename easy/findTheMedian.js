function findMedian(arr) {
    arr = arr.sort((a, b) => a - b);
    let middle = arr[Math.round((arr.length - 1) / 2)];
    return middle;
}

console.log(findMedian([56,34,12,1,2]))