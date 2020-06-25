function gradingStudents(grades) {
    let newArr = [];
    for(let i = 0; i < grades.length; i++){
        if (grades[i] >= 38) {
            if (grades[i] % 5 == 3) {
                grades[i] += 2
                newArr.push(grades[i]);
            }
            else if (grades[i] % 5 == 4) {
                grades[i] += 1
                newArr.push(grades[i]);
            } else {
                newArr.push(grades[i]);
            }
        } else {
            newArr.push(grades[i]);
        }
    }
    return newArr
}

console.log(gradingStudents([73, 67, 38, 33]))
// console.log(gradingStudents(73))