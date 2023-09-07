// FONCTION qui prend en parametre un nombre n et qui genere tout les nombre premeier jusqua n
function premier(n) {
    var tab = [];
    for (var i = 2; i <= n; i++) {
        if (premier2(i)) {
            tab.push(i);
        }
    }
    return tab;
}
console.log(premier(100));