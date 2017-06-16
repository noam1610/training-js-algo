//Exercise : There is an array of array of array .....
//We don't know the deep of the arrays
//Let's assume there are only positive integers
//The code has to return the minimal value


const MAX = 100;

const getMinimalValueInArray = (array) => {
    if (array.length === 0) {
        return MAX;
    } else {
        console.log('array.length', array.length)
        let min = MAX;
        array.forEach((subArray, index) => {
            if (Number.isInteger(subArray)) {
                if (subArray < min) {
                    min = subArray;
                }
            } else if (subArray.length > 1) {
                if (getMinimalValueInArray(subArray) < min) {
                    min = getMinimalValueInArray(subArray);
                }
            }
        })
        return min;
    }
    return MAX;
}


const arr1 = [1, 2, 5, 3];
const arr2 = [12, 22, [4, 5, 7], 38, [8,[[[[[3]]]]]]];

console.log(arr1 + ' --- --- - >' + getMinimalValueInArray(arr1));
console.log(arr2 + ' --- --- - >' + getMinimalValueInArray(arr2));
