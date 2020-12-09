/*

// TASK 
Reverse the letters in a string

// Methods used:
.split()
.reverse()
.join()

*/


function reverseStr(str) {
    // v1: requires three methods/iterations
    return str.split('').reverse().join('');

    // // v2: imperative vs functional
    // // although more code, this requires only one iteration vs functional methods
    // // by performing a `for` loop in reverse
    // let reversedString = '';
    // for ( let i = str.length - 1; i >= 0; i--) {
    //     reversedString += str[i];
    // }
    // return reversedString;

}

// TEST
console.log(reverseStr('hello world'));