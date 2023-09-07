function voyelles(str){
    var count = 0;
    var voyelles = ["a","e","i","o","u","y"];
    for(var i = 0; i < str.length; i++){
        if(voyelles.indexOf(str[i]) !== -1){
            count += 1;
        }
    }
    return count;
}
console.log(voyelles("hello world"));
console.log(voyelles("bonjour tout le monde"));
console.log(voyelles("javascript c'est nul"));