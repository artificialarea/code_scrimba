/*

// TASK 
You are given a string that consists of only lowercase English letters. If vowels are given a value of 1 and consonants are given a value of 2, return the sum of the letters in the input string.

// Methods used:
.split()
.reduce()
.includes()

*/


function countVowelConsonant(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const chars = str.split('');
    const total = chars.reduce((acc, char) => {
        if (vowels.includes(char)) {
            return acc + 1;
        }
        else {
            return acc + 2;
        }
    }, 0); // initial value of 0

    return total;
}

// // my earlier version was more heavy handed and redundant
// // not combining reduce with the condititonal includes
// function countVowelConsonant(str) {
//     const chars = str.toLowerCase().split('');
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let i = 0; i < chars.length; i++) {
//         if (vowels.includes(chars[i])) {
//             chars[i] = 1;
//         }
//         else {
//             chars[i] = 2;
//         }
//     }

//     return chars.reduce((acc, val) => acc + val);

// }



// TEST DATA
const testData = 'abcde';

console.log(countVowelConsonant(testData)); // 8