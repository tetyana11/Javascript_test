/* You should use the && operator once
You should only have one if statement
testLogicalAnd(0) should return "No"
testLogicalAnd(24) should return "No"
testLogicalAnd(25) should return "Yes"
testLogicalAnd(30) should return "Yes"
testLogicalAnd(50) should return "Yes"
testLogicalAnd(51) should return "No"
testLogicalAnd(75) should return "No"
testLogicalAnd(80) should return "No" */

function testLogicalAnd(val){ 
  // Only change code below this line

  if (val >24 && val<51) {
    
      return "Yes";
  } 
  

  // Only change code above this line
  return "No";

}
// Change this value to test
testLogicalAnd(10);

