// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
    const score = (s1 + s2 + s3) / 3
    if (score >= 90 && score <= 100){
      return 'A'
    } else if (score >= 80 && score < 90){
      return 'B'
    } else if (score >= 70 && score < 80){
      return 'C'
    } else if (score >= 60 && score < 70){
      return 'D'
    } else if (score < 60) {
      return 'F'
    }
}

// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");
// Should return:

// "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

function ghostBusters(building) {
    return building.includes(" ") ? building.split('').filter((e) => e !== ' ').join('') : "You just wanted my autograph didn't you?"
}