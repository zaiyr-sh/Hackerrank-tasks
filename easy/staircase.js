function staircase(n) {
    let staircase = "#";
    let space = " ";
    let result = "";
    for (var i = 0; i < n; i++) {
        result = result + staircase
    }
    return result
}

console.log(staircase(4))