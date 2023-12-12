/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const strLower = str.replace(/[?!, .]/g,"").toLowerCase();
  const revstr = strLower.split("").reverse().join("");
  console.log(strLower == revstr);
  return strLower == revstr;
}

module.exports = isPalindrome;
