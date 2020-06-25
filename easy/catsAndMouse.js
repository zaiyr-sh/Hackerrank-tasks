function catAndMouse(x, y, z) {
    let catA = Math.abs(z - x);
    let catB = Math.abs(z - y);

    if(catA < catB) return "Cat A";
    if(catA > catB) return "Cat B";
    if(catA === catB) return "Mouse C";
}


console.log(catAndMouse(1,3,2))