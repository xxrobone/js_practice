
// find needle in a haystack array of words containing word needle
const wordsArr = ['hay', 'poop', 'frog', 'code', 'banana', 'needle', 'city']

function findNeedle(haystack) {
    let msg = `found the needle at position `
    let needle = (n) => n === 'needle'
    return msg + haystack.findIndex(needle)
}

console.log(findNeedle(wordsArr))

function numReverse(n) {
  return n.toString().split('').reverse().map(Number)
}

// console.log(numReverse(35231))

// return a number to negative
function makeNegative(num) {
  return num<0 ? num : -num
}

// console.log(makeNegative(-3))
  
// 0.5 liters per hour
function timeToLiters(hours) {
  let liters = hours / 2
  console.log(liters)
  return Math.floor(liters)
}

// console.log(timeToLiters(11.8))

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  ".--": "W",
  "--.": "G",
  "-..": "D",
  ".": "E",
  "...-": "V",
  "--..": "Z",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "..-.": "F",
  "....": "H",
  "-.-.": "C",
  "--.-": "Q",
  "-.--": "Y",
  "-..-": "X"
};

// codewars morse code problem
let decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

// console.log(decodeMorse('--   ---   .--.'))

// reverse a input of numbers and output it in a descending order

function descendingOrder(n){
     return Number(n.toString().split("").sort((a, b) => b - a).join(""))
}

console.log(descendingOrder(1347))

function highToLow(numbers) {
  // splitting the number chain to an array of numbers
  let numArr = Array.from(String(numbers, Number))
// low to high
//  return numArr.sort(function (a, b) { return a - b }).join()

  // from high to low 
  let reverse = numArr.sort(function (a, b) { return b - a }).join('')

  return Number(reverse)
}
// console.log(highToLow(8968308873))

// bind 2 arrays and make them go in order

const a = [1, 2, 5, 8, 9];
const b = [2, 3, 5, 7, 9];

const c = a.concat(b).sort((a, b) => a - b);

//console.log(c);

//
const obj = {
  x: 1,
  getX() {
    /* const that = this */
    const inner = function () {
      /*  console.log(that.x) */
     // console.log(this.x);
    };
    inner.bind(this)();
  },
};

obj.getX();

// abcdddefghi

const getNonCharRepeatingString = (str) => {
  let subStr = '';
  let strArr = [];

  /* for (let i = 0; i < str.length; i++) { */
  for (const i in str) {
    let current = str[i];
    if (subStr.includes(current)) {
      strArr.push(subStr);
      subStr = current;
    } else {
      subStr += current;
    }
   // console.log('check', subStr);
  }
  strArr.push(subStr);

  // sort uses O(nlogn)
  let longest = strArr.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  // reduce uses O(n)
  const getLongest = (arr) =>
    arr.reduce((a, b) => {
      return b.length > a.length ? b : a;
    }, '');

 // console.log(`longest using reduce: ${getLongest(strArr)}`);

  return console.log('this is the longest string: ', longest);
};

getNonCharRepeatingString('abcdddefghi');

// example using var
var arr = [
  'first item',
  'second item is longer than the third one',
  'third longish item',
];

var lgth = 0;
var longestStr;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    var lgth = arr[i].length;
    longestStr = arr[i];
  }
}
// console.log('longest str var example + str: ' + longestStr);
