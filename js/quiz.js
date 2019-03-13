'use strict';

var quizScore = 0;
var userName = prompt('Who is taking the quiz today?');
confirm(`Welcome, ${userName}`);

// 5 yes or no questions
// 6th question ask favorite number
// alert too high or too low
// at most 4 chances to guess
// 7th question should be a multiple choice
// answers should be stored in an array
// show the score at the end

var questions = [
  'Am I 27 years old?',
  'Did I go to the University of Iowa?',
  'Do I have a degree in accounting?',
  'Is my favorite show The Office?',
  'Will I be working for FabPro after DeltaV?',
  'What is my favorite number? (1-10)',
  'Name a state other than Iowa that I have visited'
];

var answers = [
  'no',
  'yes',
  'no',
  'no',
  'yes',
  3,
  [
    'Illinois',
    'Wisconsin',
    'Missouri',
    'Florida',
    'Tennessee',
    'Texas',
    'Colorado'
  ]
];

// setTimeout(() => {

// }, 3000);
// YES, NO QUESTIONS
for (var i = 0; i < questions.length - 2; i++) {
  var guess = prompt(questions[i]);
  guess.toLowerCase();
  if (guess !== answers[i]) {
    // if incorrect
    console.log(`${guess} is INCORRECT!`);
  } else {
    // correct answer
    quizScore++;
    console.log(`${guess} is CORRECT!`);
  }
}

// NUMBER QUESTION
var guess2 = parseFloat(prompt(questions[5]));
while (guess2 !== answers[5]) {
  // if incorrect
  if (guess2 > answers[5]) {
    guess2 = parseFloat(prompt('TOO HIGH! ' + questions[5]));
    console.log(`${guess} is INCORRECT. TOO HIGH`);
    // if correct
  } else if (guess2 < answers[5]) {
    guess2 = parseFloat(prompt('TOO LOW! ' + questions[5]));
    console.log(`${guess} is INCORRECT. TOO HIGH`);
  }
}

if (guess2 === answers[5]) {
  quizScore++;
  console.log(`${guess2} was correct!`);
}

// } else {
//   quizScore++;
//   console.log(`${guess} is CORRECT`);
//   break;

// MULTIPLE ANSWERS
for (var j = 0; j < 4; j++) {
  console.log(quizScore);
  var guess3 = prompt(questions[6]);
  guess3.toLowerCase();
  for (var k = 0; k < answers[6].length; k++) {
    if (guess3 === answers[6][k]) {
      quizScore++;
      console.log(`${guess3} is one of the states I've been to!`);
      alert('Correct!');
    }
  }
}

var elAge = document.getElementById('age');
var elSchool = document.getElementById('school');
var elDegree = document.getElementById('degree');
var elShow = document.getElementById('show');
var elJob = document.getElementById('job');
var elNumber = document.getElementById('number');
var elStates = document.getElementById('states');
var elScore = document.getElementById('specific-score');
var elMessage = document.getElementById('message');

elAge.textContent = answers[0].toUpperCase();
elSchool.textContent = answers[1].toUpperCase();
elDegree.textContent = answers[2].toUpperCase();
elShow.textContent = answers[3].toUpperCase();
elJob.textContent = answers[4].toUpperCase();
elNumber.textContent = answers[5];
elStates.textContent = answers[6];
elScore.textContent = quizScore;

if (quizScore > 3) {
  elMessage.textContent = 'Good job!!!';
} else {
  elMessage.textContent = 'Better luck next time!!!';
}

// if (quizScore >= 3) {
//   elMessage.textContent = 'Good job!!!';
// } else {
//   elMessage.textContent = 'Better luck next time!!!';
// }

// setTimeout(() => {
//   var questionAge = prompt('Am I 27 years old');
//   questionAge.toLowerCase();
//   console.log(`Answer: ${questionAge}`);
//   if (questionAge === 'no') {
//     quizScore += 1;
//     alert('Correct! I am 26 years old');
//   } else if (questionAge === 'yes') {
//     quizScore -= 1;
//     alert('Incorrect! I am 26 years old');
//   } else {
//     alert('Please answer yes or no');
//   }

//   // QUESTION 2
//   var questionSchool = prompt('Did I go to the University of Iowa');
//   questionSchool.toLowerCase();
//   console.log(`Answer: ${questionSchool}`);
//   if (questionSchool === 'yes') {
//     quizScore += 1;
//     alert('Correct! I did go to Iowa');
//   } else if (questionSchool === 'no') {
//     quizScore -= 1;
//     alert('Incorrect! I did go to Iowa');
//   } else {
//     alert('Please answer yes or no');
//   }

//   // QUESTION 3
//   var questionDegree = prompt('Do I have a degree in Accounting from Iowa');
//   questionDegree.toLowerCase();
//   console.log(`Answer: ${questionDegree}`);
//   if (questionDegree === 'no') {
//     quizScore += 1;
//     alert('Correct! I actually have a marketing degree');
//   } else if (questionDegree === 'yes') {
//     quizScore -= 1;
//     alert('Incorrect! I actually have a marketing degree');
//   } else {
//     alert('Please answer yes or no');
//   }

//   // QUESTION 4
//   var questionFavoriteShow = prompt('Is my favorite show The Office');
//   questionFavoriteShow.toLowerCase();
//   console.log(`Answer: ${questionFavoriteShow}`);
//   if (questionFavoriteShow === 'no') {
//     quizScore += 1;
//     alert(
//       'Correct! My favorite show is It\'s Always Sunny in Philadelphia, but The Office is second'
//     );
//   } else if (questionFavoriteShow === 'yes') {
//     quizScore -= 1;
//     alert(
//       'Incorrect! Close, but my favorite show is It\'s Always Sunny in Philadelphia'
//     );
//   } else {
//     alert('Please answer yes or no');
//   }

//   // QUESTION 5
//   var questionJob = prompt(
//     'Will I be working at FabPro after completing DeltaV?'
//   );
//   questionJob.toLowerCase();
//   console.log(`Answer: ${questionJob}`);
//   if (questionJob === 'yes') {
//     quizScore += 1;
//     alert('Correct!');
//   } else if (questionJob === 'no') {
//     quizScore -= 1;
//     alert('Incorrect!');
//   } else {
//     alert('Please answer yes or no');
//   }

// }, 3000);
