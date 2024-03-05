function nbrsVoyelles (voyelles) {
    let voyellesNbrs = 0;
    let compteurs = 0;
    
    while (compteurs < voyelles.length) {
        let mots = voyelles.charAt(compteurs).toLowerCase();

        if(mots === 'a' || mots === 'e' || mots === 'i' || mots === 'o' || mots === 'u'){
            voyellesNbrs ++;
        }

        compteurs ++;
    }

    return voyellesNbrs;
    }

    let motsTest = 'Bien la famille ?';
    let compteurVoyelles = nbrsVoyelles(motsTest);
    console.log ("Le nombre de voyelles est de " + compteurVoyelles);
