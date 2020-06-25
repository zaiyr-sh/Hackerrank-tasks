function designerPdfViewer(h, word) {
    let newArr = [];
    let count = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < alphabet.length; i++){
        for(let j = 0; j < word.length; j++){
            if(alphabet[i] === word[j]){
                newArr.push(i);
            }
        }
    } 
    for(let i = 0; i < newArr.length; i++){
        if(h[newArr[i]] > count){
            count = h[newArr[i]]
        }
    }
    return count * word.length;
}

console.log(designerPdfViewer([1 ,3 ,1 ,3 ,1 ,4 ,1 ,3 ,2 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5, 5], 'abc'))