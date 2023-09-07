//function that test if year is bissextile
function bissextile(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(bissextile(2000));
console.log(bissextile(2001));
console.log(bissextile(2002));
console.log(bissextile(2003));