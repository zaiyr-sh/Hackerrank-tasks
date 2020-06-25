function maximumToys(prices, k) {
    prices = prices.sort(function(a, b){return a-b});
    let count = 0;
    let sum = 0;
    for(let i = 0; i < prices.length; i++){
        let check = sum;
        if( (check += prices[i]) < k){
            sum += prices[i];
            count++;
        }
    }
    return count;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))