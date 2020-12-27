function sumOddFibonacciNumbers(num) {
    let sum = 0;
    let current = 1;
    let previous = 0;
    
    while (current < num) {
        if (current % 2 === 1) {
            sum += current;
        }    
        let nextValue = current + previous;
        previous = current;
        current = nextValue;
    }
    
    return sum;
}

console.log(sumOddFibonacciNumbers(10))
;