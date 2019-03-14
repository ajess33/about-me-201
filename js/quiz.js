'use strict';

var quizScore = 0;

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
    'illinois',
    'wisconsin',
    'missouri',
    'florida',
    'tennessee',
    'texas',
    'colorado'
  ]
];

setTimeout(() => {
  var userName = prompt('Who is taking the quiz today?');
  confirm(`Welcome, ${userName}`);

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
    } else if (guess2 < answers[5]) {
      guess2 = parseFloat(prompt('TOO LOW! ' + questions[5]));
      console.log(`${guess} is INCORRECT. TOO HIGH`);
    } else {
      break;
    }
  }
  quizScore++;
  console.log(`${guess2} was correct!`);

  // MULTIPLE ANSWERS
  for (var j = 0; j < 4; j++) {
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
}, 2000);
