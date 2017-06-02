//The goal is find the number of square number between an interval

// For example you should return 3 for [3, 18] because 2*2 = 4, 3*3 = 9 , 4*4 = 16

function getNumberOfSquare(A, B) {
    if (Math.floor(Math.sqrt(A)) == Math.sqrt(A)) {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A)) + 1;
    } else {
        return Math.floor(Math.sqrt(B)) - Math.floor(Math.sqrt(A));
    }
}

var listTest = [
    [3, 4],
    [2, 9],
    [4, 16],
    [20, 23],
    [1, 10],
    [2, 34]
]

for (var i = 0; i < listTest.length; i++) {
    console.log(listTest[i][0] + ' - ' + listTest[i][1] + ' --> ' + getNumberOfSquare(listTest[i][0], listTest[i][1]))
}
