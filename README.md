# My Javascript practice

## Example 

- ### Q: find needle in a haystack array of words containing word needle

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
99998764321110

```

- ### Q: reverse a input of numbers and output it in a descending order


### My sollution

```
function descendingOrder(n){
     return Number(n.toString().split("").sort((a, b) => b - a).join(""))
}

```
answer: 

```
found the needle at position 5

```