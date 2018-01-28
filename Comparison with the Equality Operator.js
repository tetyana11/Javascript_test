/* testEqual(10) should return "Not Equal"
testEqual(12) should return "Equal"
testEqual("12") should return "Equal"
You should use the == operator
 */

// Setup
function testEqual(val) {
  if (val ==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

