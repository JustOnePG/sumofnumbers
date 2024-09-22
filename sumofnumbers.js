function sumFor(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function sumWhile(numbers) {
    var sum = 0;
    var i = 0;
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
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var testArray = [1, 2, 3, 4];
console.log('for-loop:', sumFor(testArray));
console.log('while-loop:', sumWhile(testArray));
console.log('recursion:', sumRecursion(testArray));
console.log('functional way:', sumTheFunctionalWay(testArray));
