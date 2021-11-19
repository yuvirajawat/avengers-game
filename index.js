var readlineSync = require('readline-sync');
const chalk=require('chalk');
var score=0;
function welcome(){
var userName= readlineSync.question("What's your name ? ");
console.log(chalk.blue("welcome "+ userName+" to the Avengers game !"));
console.log("--------");
}
var questions=[
{
  question:"What is real name of Ironman ? ",
  answer:"Tony Stark",
},
{
  question: "In which movie Ironman died ? ",
  answer:"End Game",
},
{
  question:"Who was the villain in the movie End Game ? ",
  answer:"Thanos",
},
{
  question:"In which movie captain america appeared first time ?(write full) ",
  answer:"Captain America:The First Avenger",
},
{
  question:"Who Killed Tony Stark's parents ? ",
  answer:"winter soldier",
},
{
  question:"Who was leading the evil army in first avengers movie ? ",
  answer:"Loki",
},
{
  question:"What AI replaces jarvis ? ",
  answer:"Edith",
},
{
  question:"What coor blood do kree have ? ",
  answer:"blue",
},
{
  question:"From which infinity stone did Carol Denvers get her powers ? ",
  answer:"Space Stone",
},
{
  question:"What was Wanda Maximoff's brother's first name ? ",
  answer:"Pietro",
}];
// play function
function play(question,answer){
  var userAnswer= readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score++;
    console.log(chalk.green("you were right !"));
  }
  else{
    console.log(chalk.red("you were wrong !"));
  }
  console.log(chalk.yellow("your score is "+score));
  console.log("--------");
}
function game(){
  for( var i=0;i< questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
}
function showScores(){
  console.log("your final score is "+score);
  if(score === 10){
    console.log(chalk.green("Yay you won !"));
  }
  else{
    console.log(chalk.yellow("Try to score 10/10 next time!"));
  }
}
welcome();
game();
showScores();