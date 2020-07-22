function kangaroo(x1, v1, x2, v2) {
    if((x1<x2)&&((v1<v2)||(v1==v2))) return "NO"
    return (((x1 - x2) % (v2 - v1)) === 0) ? 'YES' : 'NO'
}

console.log(kangaroo(0, 2, 5, 3))