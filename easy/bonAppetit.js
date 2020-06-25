function bonAppetit(bill, k, b) {
    let result = 0;
    bill.splice(k, 1);
    for(let i = 0; i < bill.length; i++){
        result = result + bill[i]
    }
    result = result / 2;
    if(result === b){
        return "Bon Appetit"
    }
    else {
        return b - result;
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7))