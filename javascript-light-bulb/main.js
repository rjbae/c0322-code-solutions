var lightOn = Boolean;

var light = document.querySelector('.bulb');
var backgroundColor = document.querySelector('.background');

light.addEventListener('click', button);

function button(event) {
  var onOrOff = null;
  if (lightOn === true) {
    onOrOff = 'on';
  } else {
    onOrOff = 'off';
  }
  light.className = 'bulb ' + onOrOff;
  backgroundColor.className = 'background ' + onOrOff;
}

// - Logic: If the light is turned on, then the button should be a light yellow color and the
// background color of the button should be a tan color.
// - If the light is turned off, then the button should be a gray color, with a black background,
// and have a box shadow behind it that is between a black and gray color.
// - We need to access the button element and body element to change those properties accordingly.
// - To access the button element we created from the HTML document, use doc.querySelector()
// with the selector being the class of the button element, which in this case is the
// .bulb class.
// - Assign that value to a new variable, so we can access it later easily.
// - To access the body element we created from the HTML document, use doc.querySelector()
// with the selector being the class of the body element, which in this case is the .background
// class.
// - We are trying to change the color of the button and background based on when we click the button.
// - So we must add an eventListener to the the earlier variable that stored the class of
// .bulb to change the color of the button.
// - In the eventListener, the type will be 'click' since we want something to happen when
// we click the button. For the listener, we want it to be a function that will perform a set
// of tasks based on whether it's on or off. In this case the tasks are going to be turning
// it yellow and the background color of tan when it's on and turning it gray when it's off
// and a background color of black with a box shadow that is between a gray and black color.
// - Define a new function named button with a single parameter of event.
// - Create a new variable named onOrOff and assign it null so we can use it later without
// having to create it again.
// - Within the function code block we are going to write a conditional statement to check
// if the button is on or off.
// - If the button is on, then the onOrOff variable will take the value of the string 'on'.
// - If the button is off, then the onOrOff variable will take the value of the string 'off'.
// - After the conditional statement, we are going to concatenate the the original class name with a new
// class name of the variable color, which holds the values of 'on' or 'off'. To add this class name we
// must use the className property of the variable that hold the value of the .bulb class. light.className = 'bulb ' + onOrOff
// - We also add the new class name of the variable color to the original class name from the variable that stored the
// .background class in. backgroundColor.className = 'background ' + onOrOff
// - We create these new classes so that it refers back to styles.css of what color to take when it's 'on' or 'off'.
