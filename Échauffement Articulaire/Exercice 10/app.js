function palindrome(str) {
  var str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  var strReverse = str.split('').reverse().join('');
  return str === strReverse;
}
console.log(palindrome('kayak'));
console.log(palindrome('arbre'));
console.log(palindrome('radar'));
console.log(palindrome('hugo'));