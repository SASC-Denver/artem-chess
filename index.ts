import "./style.css";

// Here we find all "td" elements on the screen
// and assign them to the tdElements variable
var tdElements = document.getElementsByTagName("TD");

// Then we iterate over all of the tdElements and
// for each "td" element assign it to a tdElement variable
for (var tdElement of tdElements) {
  // Adding an event listener allows the program to
  // do something when a particular event happens

  // Here we are adding an event listener for the
  // "click" events.  This means tht when a user
  // clicks on a <td></td> element the "handleClick"
  // function will be called
  tdElement.addEventListener("click", handleClick);
}

// This is a boolean variable that determines
// if an X or an O is shown on the screen in a particular
// <td></td> element
var isTheClickForAnO = false;

// This is a function named "handleClick" that takes
// one parameter named "event".  The event parameter
// is passed to this function by the browser, because
// this function handles events
function handleClick(event) {
  // Event has a target property, which contains the
  // actual element that was clicked
  var targetTd = event.target;

  // If we should put down an "O" then execute the
  // block that belongs to the if statement
  if (isTheClickForAnO) {
    // Set the contents of the <td></td> to be an "O"
    targetTd.innerHTML = "O";

    // An HTML element as a list CSS classes that
    // have been applied to it, in the "classList"
    // property.  That list has a method called "add"
    // which lets you add a class to that element
    targetTd.classList.add("O");

    // Set the boolean variable to the opposite value
    // (false) so that we place an "X" next time
    isTheClickForAnO = false;
  }
  
  // If we should put down an "X" then execute the
  // block that belongs to the else statement
  else {
    // Set the contents of the <td></td> to be an "X"
    targetTd.innerHTML = "X";
    
    targetTd.classList.add("X");
    
    // Set the boolean variable to the opposite value
    // (true) so that we place an "O" next time
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
