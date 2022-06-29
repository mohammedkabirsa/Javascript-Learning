// Reverse a Strings With Built-In Functions

function reverseString(str) {
  //split() method
  var splitString = str.split('')
  // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  //reverse() method
  var reverseArray = splitString.reverse() // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  //join() method
  var joinArray = reverseArray.join('') // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  // Return the reversed string
  return joinArray // "olleh"
}

reverseString('hello')
