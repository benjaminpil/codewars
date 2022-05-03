//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    return str.toUpperCase()
}
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
function bingo(a) {
    const winningNumbers = [2,7,9,14,15]
    return winningNumbers.every(element => a.includes(element)) ? "WIN" : "LOSE"
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    return str.split("").filter(el => !vowels.includes(el)).join("")
}