/**
 * This funtion takes an object as its parameter and return a deep clone.
*/
function deepClone(startingObject){ 
  "use strict"; 

  // Clone the object
  const newObject = JSON.parse(JSON.stringify(startingObject));

  // Log the results
  console.log('_________________deepClone.js_________________')
  console.log('The starting object was: ', startingObject);
  console.log('The new object is: ', newObject);
  console.log('And it is in fact an: ', typeof newObject);
  console.log('The top level keys are:')
  for (let key in newObject) {
    console.log(key);
  }  
  
  // Return results for further manipulation or testing
  return newObject;
}

module.exports = deepClone;