# Training js repo

This repo is aimed at providing some algorithmic and js examples in order to improve my code.

## Algorithmic skills

## Javascript

### Array

#### forEach
Go through an array and return the value

```javascript
listTest = [1,2,3];
listTest.forEach(function(item) {
    console.log(item)
})
```
#### slice

slice is used to extract a sub-array from an array.
<br/> The first argument is the first position to start from, it is included in the sub-array.
<br/> The first argument is the second position to stop at, it is not included in the sub-array.


```js
var array = ['A','B','C','D'];
console.log('array.slice(2,3)', array.slice(2,3))
//['C']
```


If there is no argument, it will duplicate the array
```js
var array = ['A','B','C','D'];
console.log('array.slice()', array.slice())
//['A','B','C','D']
```

#### splice

slice is used to add or remove into an array.
<br/> The first argument is the first position to start from, it is included in the sub-array.
<br/> The second argument is the number of elements to remove

#### pop

Remove last element of an array

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ] 
console.log(popped); // 'sturgeon'
```


#### copyWithin

The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.
arr.copyWithin(target, start, end)
**target** index at which to copy
**start** index at which to start copying elements from
**end** index at which to end copying elements from

```javascript
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]
```


#### reverse

Reverse the order of an array

```javascript
var a = ['one', 'two', 'three'];
a.reverse(); 
console.log(a); // ['three', 'two', 'one']
```


#### shift

The shift() method **removes the first element** from an array and returns that element. This method changes the length of the array.

```javascript
var a = [1, 2, 3];
var b = a.shift();

console.log(a); // [2, 3]
console.log(b); // 1
```




