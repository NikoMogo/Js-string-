/*function capitaliser(chaine) {
  let capitalisee = "";
  let i = 0

  while (i < chaine.length) {
    if (i === 0 || chaine.charAt(i - 1) === ' ') {
      capitalisee += chaine.charAt(i).toUpperCase();
    } else {
      capitalisee += chaine.charAt(i);
    }
    i++;
  }
  return capitalisee;
}
let chaineOriginale = "je suis nikolas";
let capitalisee = capitaliser(chaineOriginale);
console.log(capitalisee);*/

function motLong(chaine) {
    let longueur = 0
    let longueurMotLong = 0
    let i = 0
    
    while (i < chaine.length) {
        if (chaine.charAt(i) !== ' '){
            longueur ++;
    } else {
        if (longueur > longueurMotLong) {
            longueurMotLong = longueur
        }
        longueur = 0
    }
    i++;
}
if (longueur > longueurMotLong) {
    longueurMotLong !== longueur;
}
return longueurMotLong
}

let motsTest = "je suis nikolas magos fils de tasso"
let taille = motLong(motsTest)
console.log(taille)