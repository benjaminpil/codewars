// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
    let arrSplit = []
    let total = 0
    for(let i = 0; i<games.length; i++){
      arrSplit = games[i].split("")
      if (arrSplit[0] > arrSplit[2]){
        total += 3
      } else if (arrSplit[0] == arrSplit[2]){
        total += 1
      }
    }
    return total
  }

  // Rock Paper Scissors
  // Let's play! You have to return which player won! In case of a draw return Draw!.
  
  // Examples:
  
  // rps('scissors','paper') // Player 1 won!
  // rps('scissors','rock') // Player 2 won!
  // rps('paper','paper') // Draw!

  const rps = (p1, p2) => {
    if(p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors'){
      return 'Player 1 won!'
    } else if (p1 === 'scissors' && p2 === 'rock' || p1 === 'paper' && p2 === 'scissors' || p1 === 'rock' && p2 === 'paper'){
      return 'Player 2 won!'
    } else{
      return 'Draw!'
    }
  };

  // Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

  function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0
  }

  // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

  // Examples input/output:
  
  // XO("ooxx") => true
  // XO("xooxx") => false
  // XO("ooxXm") => true
  // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  // XO("zzoo") => false
  
  const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }