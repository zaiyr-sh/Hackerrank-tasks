function flippingBits(N) {
    let bit32 = N.toString(2).padStart(32, "0").split('');
    for(let i = 0; i < 32; i++){
        if(bit32[i] === '1'){
            bit32[i] = 0
        } else {
            bit32[i] = 1
        }
    }
    return parseInt(bit32.join(''), 2)
}

console.log(flippingBits(9));