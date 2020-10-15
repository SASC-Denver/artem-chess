var tdElements = document.getElementsByTagName("TD");
var isO = false;

// Copy from here
var arrayOfNumbers = [1, 2, 3, 4, 5, 6];
var sum = 0;
for (var aNumber of arrayOfNumbers) {
  sum = sum + aNumber;
  // alert('current number is: ' + aNumber + ', sum of all numbers so far is: ' + sum);
}
// Copy to here

var arrayOfLetters = ["a", "b", "c", "d", "e"];
var world = "world";
var arrayOfStrings = ["what ", "a ", "beatuful ", world, "!"];

var allStringsSoFar = "";
for (var aString of arrayOfStrings) {
  allStringsSoFar = allStringsSoFar + aString;
  // alert('current string is: ' + aString + ', all strings so far is: ' + allStringsSoFar);
}
var allLetersSoFar = "";
for (var aLetter of arrayOfLetters) {
  allLetersSoFar = allLetersSoFar + aLetter;
  // alert('current letter is: ' + aLetter + ', all letters so far is: ' + allLetersSoFar);
}

// index is the position number - 1
// alert('the 5th number in the array is: ' + arrayOfNumbers[4]);

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

function handleClick(event) {
  var target = event.target;
  if (isO) {
    target.innerHTML = "O";
    isO = false;
  } else {
    target.innerHTML = "X";
    isO = true;
  }
}

// var tdElements = document.getElementsByTagName('TD');
// for(let tdElement of tdElements) {
//   tdElement.addEventListener('click', function (event) {
//     const target: HTMLElement = event.target;
//     target.classList.add("X")
//     target.innerHTML = "X"
//   })
// }
