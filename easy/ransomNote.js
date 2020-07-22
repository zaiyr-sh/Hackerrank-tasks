function checkMagazine(magazine, note) {
    magazine = magazine.split(/\s+/);
    note = note.split(/\s+/);
    for(let i = 0; i < magazine.length; i++){
        for(let j = 0; j < note.length; j++){
            if(magazine[i] === note[j]){
                magazine.splice(i, 1)
                note.splice(j, 1);
                i = 0;
                j = 0;
            }
        }
    }
    if(note.length){
        console.log("No");
    } else {
        console.log("Yes");
    }
}

console.log(checkMagazine("give me one grand today night", "give one grand today"));