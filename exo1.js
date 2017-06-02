//The goal is to run an algorithme that return the first occurence of a unique value in an array

// Exemple for [1,2,3,5,4,3,2,1] it should return 4

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

    for (var i = 0; i < table.length; i++) {
        if (arrayOccurence[i] && arrayOccurence[i].occurence == 1 && arrayOccurence[i].occurence < firstPosition) {
            valueReturn = i;
            firstPosition = arrayOccurence[i].occurence
        }
    }
    return valueReturn;


}

var arr1 = [1, 2, 2, 2, 2, 5, 7, 8, 9, 10, 1, 1];
var arr2 = [7, 1, 2, 2, 2, 2, 5, 5, 9, 8, 7, 8, 9, 1, 1];

console.log(solution(arr1));
console.log(solution(arr2));
