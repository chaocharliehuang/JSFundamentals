function numbersOnly(arr) {
    var numsOnlyArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numsOnlyArr.push(arr[i]);
        }
    }
    return numsOnlyArr;
}
console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));

function removeNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            delete arr[i];
        }
    }
    return arr;
}
console.log(removeNumbers([1, "apple", -3, "orange", 0.5]));