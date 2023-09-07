function plusGrandNombre(tab) {
    var plusGrand = 0;
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] > plusGrand) {
            plusGrand = tableau[i];
        }
    }
    return plusGrand;
}
console.log(plusGrandNombre([1, 2, 3, 4, 5, 6, 7, 8, 9]));