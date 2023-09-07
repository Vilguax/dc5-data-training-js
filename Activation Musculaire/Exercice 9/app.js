//function qui trouves toutes les occurences d'une sous chaine dans une chaine 
function occurences(chaine, sousChaine){
    let compteur = 0;
    let index = chaine.indexOf(sousChaine);
    while(index !== -1){
        compteur++;
        index = chaine.indexOf(sousChaine, index + 1);
    }
    return compteur;
}
console.log(occurences("ab", "a"));
console.log(occurences("aba", "a"));
console.log(occurences("ababa", "aba"));
console.log(occurences("ababa", "abc"));