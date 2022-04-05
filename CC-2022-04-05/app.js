//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
    return b ? "true" : "false"
}

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }

//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}