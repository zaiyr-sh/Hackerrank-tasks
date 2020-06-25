function beautifulDays(i, j, k) {
    let count = 0;
    let length = j + 1;
    let reverse = (num) => parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    for(i ; i < length; i++){
        if((i - reverse(i)) % k === 0 ){
            count++;
        }
    }
    return count;
}

console.log(beautifulDays(20,23,6))