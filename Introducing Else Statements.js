/* You should only have one if statement in the editor
You should use an else statement
testElse(4) should return "5 or Smaller"
testElse(5) should return "5 or Smaller"
testElse(6) should return "Bigger than 5"
testElse(10) should return "Bigger than 5"
Do not change the code above or below the lines. */

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  else 
    {
    result = "5 or Smaller";
    }
    
  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(10);

