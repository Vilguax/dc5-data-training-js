//function that use bublesort to sort an array  
function triage(tab) {
    var i = 0;
    var j = 0;
    var tmp = 0;
    for (i = 0; i < tab.length; i++) {
        for (j = 0; j < tab.length; j++) {
            if (tab[i] < tab[j]) {
                tmp = tab[i];
                tab[i] = tab[j];
                tab[j] = tmp;
            }
        }
    }
    return tab;
}
console.log(triage([5, 4, 3, 2, 1]));
console.log(triage([1, 2, 3, 4, 5]));
console.log(triage([1, 3, 2, 5, 4]));