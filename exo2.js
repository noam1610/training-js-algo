//The goal is find the number of square number between an interval

// For example you should return 3 for [3, 18] because 2*2 = 4, 3*3 = 9 , 4*4 = 16

function getNumberOfSquare(A, B) {

    var A_use = A >= 0 ? A : 0;

    if (B < 0) {
        return 0;
    } else if (A_use === B && Math.floor(Math.sqrt(B)) === Math.sqrt(B)) {
        return 1;
    } else if (Math.floor(Math.sqrt(A_use)) === Math.sqrt(A_use)) {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A_use)) + 1;
    } else {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A_use));
    }
}

var listTest = [
    [3, 4],
    [2, 9],
    [4, 16],
    [20, 23],
    [1, 10],
    [2, 34],
    [7, 7],
    [7, 8],
    [4, 4],
    [8, 9],
    [-8, 9],
    [-1, 10],
    [-2, -34],
    [-4, -4],
    [-3, 2],
    [-5, -5],

]

listTest.forEach(function(item) {
    console.log(item[0] + ' - ' + item[1] + ' --> ' + getNumberOfSquare(item[0], item[1]))
})
