const getFirstUniqueElementInArray = (arr) => {
  let copyOfArr;
  for (let i = 0; i < arr.length; i += 1) {
    copyOfArr = arr.slice();
    copyOfArr.splice(i, 1);
    if (copyOfArr.indexOf(arr[i]) === -1) return arr[i];
  }
  return -1;
};

const arr1 = [1, 2, 2, 2, 2, 5, 7, 8, 9, 10, 1, 1];
const arr2 = [7, 1, 2, 2, 2, 2, 5, 5, 9, 8, 7, 8, 9, 1, 1];

console.log(getFirstUniqueElementInArray(arr1)); // returns 5
console.log(getFirstUniqueElementInArray(arr2)); // returns -1
