
var tdElements = document.getElementsByTagName('TD');
var isO = false;

for(var tdElement of tdElements) {
  tdElement. addEventListener('click', handleClick);
}

function handleClick(event) {
  var target = event.target;
  if (isO) {
    target.innerHTML = 'O';
    isO = false;
  } else {
    target.innerHTML = 'X';
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