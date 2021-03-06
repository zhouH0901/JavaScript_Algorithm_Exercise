// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   /* temp=""
    for (num of str){
        temp = num + temp
    }
    if(temp === str){
        return true
    }else{
        return false
    }*/

    /*
    temp = ""
    temp = str.split("").reverse().join("")
    if(str === temp){
        return true
    }else{
        return false
    }
    */


    /*利用JavaScript every() 函数

    const temp = str.split("").every(
        (char, index) => {
          return char === str[str.length - index - 1]
        }
       )
    return temp
    */
    /*
    var result1 = str;
    var result2 = str.split('').reverse().join('');
    if(result1 === result2){
        return true
    }else{
        return false
    }*/
/*
    return str.split('').every((char,i) =>{
        return char === str[str.length-i -1]
    })
*/

    return str.split('').every((char, i)=>{return char === str[str.length -i -1]})
}

module.exports = palindrome;
