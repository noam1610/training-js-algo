const getMinimumValueOfSuperNestedArrays = (arr) => {
    let flattenArray = arr;
    while(!flattenArray.every(item => Number.isInteger(item))) {
        const tempArray = [];
        flattenArray.forEach(item => {
            if(item.length === 0) return; // handles the case of empty nested arrays
            if(item.length > 0) {
                item.forEach(subItem => {
                    tempArray.push(subItem);
                });
            } else {
                tempArray.push(item);
            }
        });
        flattenArray = tempArray;
    }
    return Math.min(...flattenArray);
};

const arr1 = [1, 2, [[3]], 5, [4, [5, [9, [15]]]]];
const arr2 = [1, 2, 5, 3];
const arr3 = [12, 22, [4, 5, 7], 38, [8,[[[[[3]]]]]]];
const arr4 = [12, 22, [4, 5, 7], 38, [8, 2]];
const arr5 = [3, [[1]]];
const arr6 = [12, []];
const arr7 = [];

TestCases = [arr1, arr2, arr3, arr4, arr5, arr6, arr7];
TestCases.forEach((arr, index) => {
    const message = `Min value of arr${index + 1} is ${getMinimumValueOfSuperNestedArrays(arr)}`;
    console.log(message);
});
