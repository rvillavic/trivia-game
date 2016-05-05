
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

startTimer();
questions[0] = "1) The color of the sky is...";
choices[0] = new Array();
choices[0][0] = "green";
choices[0][1] = "blue";
choices[0][2] = "brown";
choices[0][3] = "cornflower";
answers[0] = choices[0][1];

questions[1] = "2) Beyonce was in Destiny's Child before going solo.";
choices[1] = new Array();
choices[1][0] = "False";
choices[1][1] = "True";
answers[1] = choices[1][1];

// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";