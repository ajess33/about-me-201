'use strict';

var quizScore = 0;
var userName = prompt('Who is taking the quiz today?');
confirm(`Welcome, ${userName}`);

setTimeout(() => {
  var questionAge = prompt('Am I 27 years old');
  questionAge.toLowerCase();
  console.log(`Answer: ${questionAge}`);
  if (questionAge === 'no') {
    quizScore += 1;
    alert('Correct! I am 26 years old');
  } else if (questionAge === 'yes') {
    quizScore -= 1;
    alert('Incorrect! I am 26 years old');
  } else {
    alert('Please answer yes or no');
  }

  // QUESTION 2
  var questionSchool = prompt('Did I go to the University of Iowa');
  questionSchool.toLowerCase();
  console.log(`Answer: ${questionSchool}`);
  if (questionSchool === 'yes') {
    quizScore += 1;
    alert('Correct! I did go to Iowa');
  } else if (questionSchool === 'no') {
    quizScore -= 1;
    alert('Incorrect! I did go to Iowa');
  } else {
    alert('Please answer yes or no');
  }

  // QUESTION 3
  var questionDegree = prompt('Do I have a degree in Accounting from Iowa');
  questionDegree.toLowerCase();
  console.log(`Answer: ${questionDegree}`);
  if (questionDegree === 'no') {
    quizScore += 1;
    alert('Correct! I actually have a marketing degree');
  } else if (questionDegree === 'yes') {
    quizScore -= 1;
    alert('Incorrect! I actually have a marketing degree');
  } else {
    alert('Please answer yes or no');
  }

  // QUESTION 4
  var questionFavoriteShow = prompt('Is my favorite show The Office');
  questionFavoriteShow.toLowerCase();
  console.log(`Answer: ${questionFavoriteShow}`);
  if (questionFavoriteShow === 'no') {
    quizScore += 1;
    alert(
      'Correct! My favorite show is It\'s Always Sunny in Philadelphia, but The Office is second'
    );
  } else if (questionFavoriteShow === 'yes') {
    quizScore -= 1;
    alert(
      'Incorrect! Close, but my favorite show is It\'s Always Sunny in Philadelphia'
    );
  } else {
    alert('Please answer yes or no');
  }

  // QUESTION 5
  var questionJob = prompt(
    'Will I be working at FabPro after completing DeltaV?'
  );
  questionJob.toLowerCase();
  console.log(`Answer: ${questionJob}`);
  if (questionJob === 'yes') {
    quizScore += 1;
    alert('Correct!');
  } else if (questionJob === 'no') {
    quizScore -= 1;
    alert('Incorrect!');
  } else {
    alert('Please answer yes or no');
  }

  var elAge = document.getElementById('age');
  var elSchool = document.getElementById('school');
  var elDegree = document.getElementById('degree');
  var elShow = document.getElementById('show');
  var elJob = document.getElementById('job');
  var elScore = document.getElementById('specific-score');
  var elMessage = document.getElementById('message');

  elAge.textContent = questionAge.toUpperCase();
  elSchool.textContent = questionSchool.toUpperCase();
  elDegree.textContent = questionDegree.toUpperCase();
  elShow.textContent = questionFavoriteShow.toUpperCase();
  elJob.textContent = questionJob.toUpperCase();
  elScore.textContent = quizScore;

  if (quizScore >= 3) {
    elMessage.textContent = 'Good job!!!';
  } else {
    elMessage.textContent = 'Better luck next time!!!';
  }
}, 3000);
