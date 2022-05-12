// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    let arr = [];
    for(let i = n; i > 0; i--) {
      arr.unshift(i);
    }
    return arr;
  }

//   Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

var min = function(list){
    list = list.sort((a,b)=> a-b)
    return list[0];
}

var max = function(list){
    list = list.sort((a,b)=> a-b)
    return list[list.length-1];
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump
  };

//   It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

//   Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
  
//   If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
  
//   Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

  function bonusTime(salary, bonus) {
    const sign = "\u00A3";
    bonus ? salary *= 10 : salary
    return sign + salary
  }