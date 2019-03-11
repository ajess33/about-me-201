const name = prompt('What is your name?');
let elIntro = document.querySelector('.hello');
console.log(name);

if (name === '') {
  // if the user does not enter a name
  elIntro.textContent = ' Stranger!';
} else {
  elIntro.textContent = ` ${name}!`;
}
