function squares(a, b) {
    let count = 0;
    for(a; a <= b; a++){
        if(Math.sqrt(a) % 1 == 0){
            count++
        }
    }
    return count
}

console.log(squares(3, 9));
