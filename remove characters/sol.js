//https://bigfrontend.dev/problem/remove-characters



/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  let regEx = /b|(ac)/g
while(input.match(regEx)){
   input = input.replace(regEx, '')
  
}

console.log(input)
return input
}



