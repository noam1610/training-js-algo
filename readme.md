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




