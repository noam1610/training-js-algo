//The goal is find the number of square number between an interval

// For example you should return 3 for [3, 18] because 2*2 = 4, 3*3 = 9 , 4*4 = 16

function getNumberOfSquare(A, B) {

    var A = Math.max(0, A);

    if (B < A) {
        return 0;
    } else if (B < 0) {
        return 0;
    } else if (A === B && Math.floor(Math.sqrt(B)) === Math.sqrt(B)) {
        return 1;
    } else if (Math.floor(Math.sqrt(A)) === Math.sqrt(A)) {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A)) + 1;
    } else {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A));
    }
}



var generateArrayOfTestingInput = function(min, max, size) {
    var listTest = []
    for (var i = 0; i < size; i++) {
        var value1 = Math.floor(Math.random(0, 1) * (max - min) + min);
        var value2 = Math.floor(Math.random(0, 1) * (max - value1) + value1);
        listTest.push([value1, value2])
    }
    return listTest;
}

var testList = generateArrayOfTestingInput(-50, 50, 100);
testList.forEach(function(item) {
    console.log(item[0] + ' / ' + item[1] + ' --> ' + getNumberOfSquare(item[0], item[1]))
})
