//The goal is to run an algorithm that returns the first occurence of a unique value in an array

// Exemple for [1,2,3,5,4,3,2,1] it should return 5

// If there is on duplicate value it should return -1
const getFirstUniqueValue = (table) => {
    const arrayOccurence = {};
    for (let i = 0; i < table.length; i++) {
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
    let firstUniqueValue = -1;
    let firstPosition = table.length + 1;
    for (item in arrayOccurence) {
        item = arrayOccurence[item];
        if (item.occurence == 1 && item.firstPosition < firstPosition) {
            firstUniqueValue = item.value;
            firstPosition = item.firstPosition;
        }
    }
    return firstUniqueValue;

}

const arr1 = [1, 2, 2, 2, 2, 5, 7, 8, 9, 10, 1, 1];
const arr2 = [7, 1, 2, 2, 2, 2, 5, 5, 9, 8, 7, 8, 9, 1, 1];
const arr3 = [1, 2, 2, 2, 2, 50, 7, 8, 9, 10, 1, 1];
const arr4 = [1, 1, 4];

console.log(arr1 + ' --- --- - >' + getFirstUniqueValue(arr1));
console.log(arr2 + ' --- --- - >' + getFirstUniqueValue(arr2));
console.log(arr3 + ' --- --- - >' + getFirstUniqueValue(arr3));
console.log(arr4 + ' --- --- - >' + getFirstUniqueValue(arr4));
