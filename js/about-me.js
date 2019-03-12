const playButton = document.getElementById('start-game');
playButton.addEventListener('click', guessingGame);

function guessingGame() {
  var number = Math.floor(Math.random() * 20);
  console.log(number);
  alert('I have a number between 1-20. Ready to play?');
  var guess = parseFloat(prompt('Guess a number'));

  while (guess !== number) {
    if (guess > number) {
      guess = parseFloat(prompt('You guessed TOO HIGH. Try again'));
    } else if (guess < number) {
      guess = parseFloat(prompt('You guessed TOO LOW. Try again'));
    }
  }
  if (guess === number) {
    alert(`Congrats ${guess} was the number!!`);
  }
}
