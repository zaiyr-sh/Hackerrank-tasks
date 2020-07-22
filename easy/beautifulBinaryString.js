function beautifulBinaryString(b) {
    b = b.split('')
    let count = 0;
    for(let i = 0; i < b.length; i++){
        if(b[i] === '0' && b[i+1] === '1' && b[i+2] === '0'){
            count++
            i = i+2
        }
    }
    return count
}

// console.log(beautifulBinaryString('0101010'));
console.log(beautifulBinaryString('0100101010'));