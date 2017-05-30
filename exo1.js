//The goal is to run an algorithme that return the first occurence of a unique value in an array

// Exemple for [1,2,3,5,4,3,2,1] it should return 4

// If there is on duplicate value it should return -1

function solution(table) {
    var maxTable = maxInt(table);
    var arrayOccurence = new Array(maxTable + 2).join('0').split('').map(parseFloat);
    arrayOccurence = arrayOccurence.map(function(element, index) {
        return {
            value: index,
            occurence: 0,
            firstPosition: -1
        }
    })
    // console.log(arrayOccurence);

    for (var i = 0; i < table.length; i++) {
        // console.log('i', i);
        // console.log('table[i]', table[i]);
        if (arrayOccurence[table[i]].occurence == 0) {
            arrayOccurence[table[i]].occurence++;
            arrayOccurence[table[i]].firstPosition = i;
        } else {
            arrayOccurence[table[i]].occurence++;
        }
    }

    arrayOccurence = arrayOccurence.filter(function(element) {
        return element.occurence == 1
    })

    arrayOccurence.sort(function(a, b) {
        return a.firstPosition - b.firstPosition;
    });

    if (arrayOccurence[0] != null || arrayOccurence[0] != undifined) {
        return arrayOccurence[0].value;
    } else {
        return -1;
    }
}

function maxInt(A) {
    var maxA = A[0];
    for (var i = 0; i < A.length; i++) {
        if (A[i] > maxA) {
            maxA = A[i]
        }
    }
    return maxA;
}


console.log(solution([1, 2, 3, 5, 4, 3, 2, 1]))
