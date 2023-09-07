function sommeTableau(tableau){
    var somme = 0;
    for(var i = 0; i < tableau.length; i++){
        somme += tableau[i];
    }
    return somme;
}
console.log(sommeTableau([1, 2, 3, 4, 5, 6, 7, 8, 9]));