// FONCTION qui prend en entré un nombre entier n et retoure la somme de tout les nombres allant de 1 à n
function somme(n) {
    var somme = 0;
    for (var i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}
console.log(somme(50));