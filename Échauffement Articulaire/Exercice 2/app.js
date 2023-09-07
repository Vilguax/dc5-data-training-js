// function that check if year is bissextile or not
function estBissextile(annee) {
    if (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(estBissextile(2020));
console.log(estBissextile(2021));
console.log(estBissextile(2022));
console.log(estBissextile(2023));
console.log(estBissextile(2024));