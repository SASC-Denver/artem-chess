
var tdElements = document.getElementsByTagName('TD');

for(var tdElement of tdElements) {
  tdElement. addEventListener('click', handleClick);
}

function handleClick() {
  alert('hello');
}


// var tdElements = document.getElementsByTagName('TD');
// for(let tdElement of tdElements) {
//   tdElement.addEventListener('click', function (event) {
//     const target: HTMLElement = event.target;
//     target.classList.add("X")
//     target.innerHTML = "X"
//   })
// }