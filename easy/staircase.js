function staircase(n) {
    let staircase = "#";
    for(let i = 1; i <= n; i++){
        let result = "";
        for(let j = 1; j <= n; j++){
            if(j <= n - i) result += " ";
            else result += "#" 
        }
        console.log(result)
    }
}

console.log(staircase(4))