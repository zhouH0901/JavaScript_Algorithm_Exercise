// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let num = 0;
    const store = ['a','e','i','o','u'];
    for(let word of str.toLowerCase()){
        if(store.includes(word)){
            num++
        }
    }
    return num;
}

module.exports = vowels;
