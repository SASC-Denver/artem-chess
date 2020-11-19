var tdElements = document.getElementsByTagName("TD");
for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

var isO = false;
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
