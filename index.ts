var tdElements = document.getElementsByTagName("TD");
for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

var isTheClickForAnO = false;
function handleClick(event) {
  var target = event.target;
  if (isTheClickForAnO) {
    target.innerHTML = "O";
    isTheClickForAnO = false;
  } else {
    target.innerHTML = "X";
    isTheClickForAnO = true;
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
