function minimumNumber(n, password) {
    let count = 0;
    if(!password.match(/\d/)) count++
    if(!password.match(/[A-Z]/)) count++
    if(!password.match(/[a-z]/)) count++
    if(!password.match(/\W/)) count++
    (password.length + count) < 6 ? count += 6 - (password.length + count) : ""
    return count;
}

console.log(minimumNumber(3, 'Ab1'))