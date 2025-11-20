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
  // turn array of string into numbers
  const numbers = array.map((x) => Number(x.length));
  console.log(numbers);
  // find the longest
  //const highest = number.reduce((acc, total) => {
  //return acc >= total
  //}
  //)
  console.log(highest);
  //console.log(Math.max(...array))
  //array.map((x) => {
  // check the lengths of each array items
  console.log(x.length);
  // return the longest first instance
  // })
  return sentence;
}
