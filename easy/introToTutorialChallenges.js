function introTutorial(V, arr) {
    for(let i = 0; i < arr.length; i++){
        if(V === arr[i]){
            return i
        }
    }
    
}

console.log(introTutorial(4, [1, 4, 5, 7, 9, 12]))