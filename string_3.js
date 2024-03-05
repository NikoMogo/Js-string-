/*function palindrome (chaine){
    let dromepalin = 0;
    let index = chaine.length - 1;

    while (index = chaine.length) {
        dromepalin += chaine.charAt(index)

        if (dromepalin = -1){
            dromepalin = true
        } else{
            (dromepalin = false)
        } 
        index--;
    }
    return dromepalin;
}

let chaineOriginale = 'kayak'
let dromepalin = palindrome(chaineOriginale);
console.log(dromepalin);*/

function palindrome (chaine) {
    chaine=chaine.toLowerCase();

    let dromepalin = 0;
    let index = chaine.length - 1;

    while (dromepalin < index) {
        if (chaine.charAt(dromepalin) !== chaine.charAt(index)) {
            return false;
        }
        dromepalin++;
        index--;
    }
    return true;
}

console.log(palindrome("Mon cul"));