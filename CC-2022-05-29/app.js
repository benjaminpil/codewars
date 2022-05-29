// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. 
function isNarcissistic(n) {
    const arr = n.toString().split('').map(Number);
    return n === arr.reduce((acc,c) => acc += c**arr.length,0)
}