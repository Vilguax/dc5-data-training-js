//function that found biggest divisor of two numbers usign Euclid's algorithm
function diviseur(a,b){
    if(a%b==0){
        return b;
    }
    else{
        return diviseur(b,a%b);
    }
}
console.log(diviseur(1071,462));
console.log(diviseur(462,1071));
console.log(diviseur(1071,563));