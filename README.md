# My Javascript practice

## Example 

- ### Q: find the needle in a haystack array of words containing the word needle
- ### expected output: found the needle at position **position of the index**

- test array const wordsArr = ['hay', 'poop', 'frog', 'code', 'banana', 'needle', 'city']

### My sollution

```
function findNeedle(haystack) {
    let msg = `found the needle at position `
    let needle = (n) => n === 'needle'
    return msg + haystack.findIndex(needle)
}

```

answer: 

```
found the needle at position 5

```

- ### Q: reverse a input of numbers and output it in a descending order

- ### expected output: 7431 from an input of 1347

### My sollution

```
function descendingOrder(n){
     return Number(n.toString().split("").sort((a, b) => b - a).join(""))
}

```
answer: 

```
7431

```