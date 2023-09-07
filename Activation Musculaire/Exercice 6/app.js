//function that count word in string
function compteurMot(str){
    var count = 0;
    var tab = str.split(" ");
    for(var i = 0; i < tab.length; i++){
        count += 1;
    }
    return count;
}
console.log(compteurMot("hello world"));
console.log(compteurMot("bonjour tout le monde"));
console.log(compteurMot("javascript c'est nul"));