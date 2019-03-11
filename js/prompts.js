// ======================
// LAB 06
// ======================

// use a total of 4 prompts and confirms
// each response should be in a variable

var userName = prompt('Hello, what is your name?');
console.log(`Your name is ${userName}`);
var userExperience = prompt('How long have you been learning to code?');
console.log(`Coding experience is ${userExperience}`);
var userSkill = prompt('What is your skill level?');
console.log(`Your skill level is ${userSkill}`);

alert(
  `Hello, ${userName}! You have been learning to code for ${userExperience} and your skill level is ${userSkill}`
);

confirm('Was the information displayed correctly?');
