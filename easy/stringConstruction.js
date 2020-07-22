function stringConstruction(s) {
    let uniqueVal = new Set(s);
    return Array.from(uniqueVal).length;
}

console.log(stringConstruction('abab'));