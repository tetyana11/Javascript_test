/* myGlobal should be defined
myGlobal should have a value of 10
myGlobal should be declared using the var keyword
oopsGlobal should have a value of 5
Do not declare oopsGlobal using the var keyword
 */


var myGlobal = 10;
// Declare your variable here

oopsGlobal = 5;

function fun1() {
  // Assign 5 to oopsGlobal Here
 
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

