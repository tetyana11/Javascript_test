/* testStrictNotEqual(17) should return "Equal"
testStrictNotEqual("17") should return "Not Equal"
testStrictNotEqual(12) should return "Not Equal"
testStrictNotEqual("bob") should return "Not Equal"
You should use the !== operator */

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !==17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

