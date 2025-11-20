// Longest Word
// Given a sentence string, return the longest word in the sentence.

// Words are separated by a single space.
// Only letters (a-z, case-insensitive) count toward the word's length.
// If there are multiple words with the same length, return the first one that appears.
// Return the word as it appears in the given string, with punctuation removed.
function longestWord(sentence) {
  console.log(sentence);
  // turn sentence into an array
  const array = sentence.split(' ');
  console.log(array);

  // const replaced = str.replace(regex, "freeCodeCamp");
  // remove all punctuation
  function removePunctuation(str) {
    return str
      .split('')
      .filter((char) => {
        return /[a-zA-Z0-9 ]/.test(char);
      })
      .join('');
  }
  const cleanArray = array.map((x) => removePunctuation(x));
  console.log(cleanArray);

  // const regex = /[a-zA-Z]+/
  // const processedArray = array.map((x) => {
  // return x.replace(regex)
  // })
  //console.log(processedArray)
  // turn array of string into numbers
  const numbers = cleanArray.map((x) => Number(x.length));
  console.log(numbers);
  // find the longest
  const max = Math.max(...numbers);
  console.log(max);
  console.log(numbers.indexOf(max));
  const index = numbers.indexOf(max);
  console.log(array[index]);
  return cleanArray[index];
  //const longest = numbers.reduce((a,b) => a < b)
  //console.log(longest)

  //const highest = number.reduce((acc, total) => {
  //return acc >= total
  //}
  //)
  //console.log(highest)
  //console.log(Math.max(...array))
  //array.map((x) => {
  // check the lengths of each array items
  // console.log(x.length)
  // return the longest first instance
  //  })
  // return sentence;
}

// const ages = [3, 10, 18, 20];

// ages.findIndex(checkAge);

// function checkAge(age) {
//  return age > 18;
// }

// function highest(a) {
//  return Math.max(numbers)
// }

// console.log(Math.max(1, 3, 2));
// Expected output: 3

// const array = [1, 3, 2];

// console.log(Math.max(...array));
// Expected output: 3
