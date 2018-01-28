/* trueOrFalse should be a function
trueOrFalse(true) should return a string
trueOrFalse(false) should return a string
trueOrFalse(true) should return "Yes, that was true"
trueOrFalse(false) should return "No, that was false" */

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);

