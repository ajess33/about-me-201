const playButton = document.getElementById('start-game');
playButton.addEventListener('click', guessingGame);

function guessingGame() {
  var number = Math.floor(Math.random() * 10);
  console.log(number);
  alert('I have a number between 1-10. Ready to play?');
  var guess = parseFloat(prompt('Guess a number'));

  while (guess !== number) {
    guess = parseFloat(prompt('Your guess is wrong. Try again!!'));
  }
  // only works if you are right on your first guess
  if (guess === number) {
    alert(`Congrats ${guess} was the number!!`);
  }
}
