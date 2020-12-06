function sortByLength(strs) {
    return strs.sort((a, b) => a.length - b.length);
}


// TEST
let testData = ["abc", "", "aaa", "a", "zz"];
console.log(sortByLength(testData));
// expected output: ["", "a", "zz", "abc", "aaa"]