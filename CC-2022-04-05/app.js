//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
    return b ? "true" : "false"
}

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }
