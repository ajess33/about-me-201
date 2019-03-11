const playButton = document.getElementById('start-game');
playButton.addEventListener('click', guessingGame);

function guessingGame() {
  var number = Math.floor(Math.random() * 10);
  console.log(number);
  alert('I have a number between 1-10. Ready to play?');
  var guess = parseFloat(prompt('Guess a number'));

  while (guess !== number) {
    prompt('Your guess is wrong. Try again!!');
  }

  if (guess === name) {
    alert(`Congrats ${guess} was the number!!`);
  }
}

// use a total of 4 prompts and confirms
// each response should be in a variable

var userName = prompt('What is your name?');
var userExperience = prompt('How long have you been learning to code?');
var userJob = prompt('What kind of job do you want as a programmer?');

alert(
  `Hello, ${userName}! You have been learning to code for ${userExperience} to be a  ${userJob}`
);

confirm('Correct?');
