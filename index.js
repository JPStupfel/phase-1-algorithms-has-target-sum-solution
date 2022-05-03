function hasTargetSum(array, target) {

const seenNumbers = new Set()
for (number of array)
    {
      const reciprocal = target - number
      if (seenNumbers.has(reciprocal)){return true}
      else {seenNumbers.add(number); console.log(seenNumbers)}
    }
return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
create an empty object.

iterate through the array.

if the reciprocal of each number is in object, return true.

else, add that number to the object

if complete the loop, return false


*/

/*
  Add written explanation of your solution here
  input = array and integer
  return = whether any two numbers in the array add up to the integer
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
