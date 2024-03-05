function inverserChaine(chaine) {
    let chaineInverse = '';
    let index = chaine.length - 1;

    while (index >=0) {
        chaineInverse += chaine.charAt(index);
        index--;
    }
    return chaineInverse;
}

let chaineOriginale = "Nikolas";
let chaineInverse = inverserChaine(chaineOriginale)
console.log(chaineInverse)