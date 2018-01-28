

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var item1 = arr.shift();
  return item1;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); 
console.log("After: " + JSON.stringify(testArr));

