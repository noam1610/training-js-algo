//The goal is find the number of square number between an interval

// For example you should return 3 for [3, 18] because 2*2 = 4, 3*3 = 9 , 4*4 = 16

function getNumberOfSquare(A, B) {

    var A_use = Math.max(0, A);

    if (B < A) {
        return 0;
    } else if (B < 0) {
        return 0;
    } else if (A_use === B && Math.floor(Math.sqrt(B)) === Math.sqrt(B)) {
        return 1;
    } else if (Math.floor(Math.sqrt(A_use)) === Math.sqrt(A_use)) {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A_use)) + 1;
    } else {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A_use));
    }
}

var listTest = []
for (var i = 0; i < 10; i++) {
    var value1 = Math.floor(Math.random(0, 1) * 100 - 50);
    var value2 = Math.floor(Math.random(0, 1) * 100 - 50);
    listTest.push([value1, value2])
}

listTest.forEach(function(item) {
    console.log(item[0] + ' / ' + item[1] + ' --> ' + getNumberOfSquare(item[0], item[1]))
})
