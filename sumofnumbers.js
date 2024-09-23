"use strict";
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers[0] + sumRecursion(numbers.slice(1));
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const testArray = [1, 2, 3, 4];
console.log('for-loop:', sumFor(testArray));
console.log('while-loop:', sumWhile(testArray));
console.log('recursion:', sumRecursion(testArray));
console.log('functional way:', sumTheFunctionalWay(testArray));
