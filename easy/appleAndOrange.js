function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let s1 = s;
    let countApples = 0;
    let countOranges = 0;
    let arrApples = [];
    let arrOranges = [];
    for(let apple of apples){
        arrApples.push(a + apple);
    }
    for(let orange of oranges){
        arrOranges.push(b + orange)
    }
    while(s1 <= t){
        if(arrApples.includes(s1)) {
            countApples++;
        }
        s1++
    }
    while(s <= t){
        if(arrOranges.includes(s)) {
            countOranges++;
        }
        s++
    }
    console.log(countApples);
    console.log(countOranges);
}

console.log(countApplesAndOranges(
    7,
    11,
    5,
    15,
    [-2,2,1],
    [5, -6]
));
// console.log(countApplesAndOranges(
//     2,
//     3,
//     1,
//     5,
//     [2],
//     [-2]
// ));