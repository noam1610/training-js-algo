//The goal is to run an algorithm that return the first occurence of a unique value in an array

// Exemple for [1,2,3,5,4,3,2,1] it should return 5

// If there is on duplicate value it should return -1

function solution(table) {
    var arrayOccurence = {};
    for (var i = 0; i < table.length; i++) {
        if (!arrayOccurence[table[i]]) {
            arrayOccurence[table[i]] = {
                value: table[i],
                occurence: 1,
                firstPosition: i
            }
        } else {
            arrayOccurence[table[i]].occurence++;
        }
    }

    var valueReturn = -1;
    var firstPosition = table.length + 1;

    for (item in arrayOccurence) {
        element = arrayOccurence[item];
        if (element.occurence == 1 && element.firstPosition < firstPosition) {
            valueReturn = element.value;
            firstPosition = element.firstPosition;
        }
    }
    return valueReturn;

}

var arr1 = [1, 2, 2, 2, 2, 5, 7, 8, 9, 10, 1, 1];
var arr2 = [7, 1, 2, 2, 2, 2, 5, 5, 9, 8, 7, 8, 9, 1, 1];
var arr3 = [1, 2, 2, 2, 2, 50, 7, 8, 9, 10, 1, 1];
var arr4 = [1, 1, 4];

console.log(arr1 + ' --- --- - >' + solution(arr1));
console.log(arr2 + ' --- --- - >' + solution(arr2));
console.log(arr3 + ' --- --- - >' + solution(arr3));
console.log(arr4 + ' --- --- - >' + solution(arr4));
