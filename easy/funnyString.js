function funnyString(s) {
    let absDiffFirst = [];
    let absDiffSecond = [];
    let strArr = [];
    let reverseStrArr = [];
    for(let i = 0; i < s.length; i++){
        strArr.push(s[i].charCodeAt(0));
    }

    for(let j = 0; j < strArr.length - 1; j++){
        absDiffFirst.push(Math.abs(strArr[j] - strArr[j+=1]));
        j--
    }

    reverseStrArr = strArr.reverse();
    for(let j = 0; j < reverseStrArr.length - 1; j++){
        absDiffSecond.push(Math.abs(strArr[j] - strArr[j+=1]));
        j--
    }

    return JSON.stringify(absDiffFirst)==JSON.stringify(absDiffSecond) === true ? "Funny" : "Not Funny";
}

console.log(funnyString('lmnop'));