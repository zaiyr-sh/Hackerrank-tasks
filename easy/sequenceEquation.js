function permutationEquation(p) {
    let newArr = [];
    let newArr2 = [];
    let newArr3 = [];
    for(let i = 1; i <= p.length; i++){
        newArr.push(i)
    }

    for(let j = 1; j <= newArr.length; j++){
        newArr2.push(p.indexOf(j) + 1)
    }

    for(let k = 0; k < newArr2.length; k++){
        newArr3.push(p.indexOf(newArr2[k]) + 1)
    }

    return newArr3;
}

console.log(permutationEquation([5,2,1,3,4])); 