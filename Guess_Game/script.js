"use script";

// console.log( document.querySelector(".message").textContent);

// console.log(document.querySelector(".message").textContent ="Correct Number");

// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secreteNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    //document.querySelector(".message").textContent ="No Number!" ;
    displayMessage("No Number!");
  }
  //player wins
  else if (guess === secreteNum) {
    displayMessage("Correct number.Match found");
    document.querySelector(".number").textContent = secreteNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "200px";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secreteNum) {
    if (score > 1) {
      // document.querySelector(".message").textContent
      displayMessage(guess > secreteNum ? "Guess is High" : "Guess is low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //      //Guess is too high
  //     else if(guess>secreteNum){
  //         if(score>1){
  //             document.querySelector(".message").textContent ="Guess is High";
  //             score--;
  //             document.querySelector('.score').textContent=score;
  //         }
  //         else{
  //             document.querySelector(".message").textContent ="You lost the game";
  //             document.querySelector('.score').textContent=0;
  //         }
  //     }
  //     //guess is too low
  //     else if(guess<secreteNum){
  //         if(score>1){
  //             document.querySelector(".message").textContent ="Guess is Low";
  //             score--;
  //             document.querySelector('.score').textContent=score;
  //         }
  //         else{
  //             document.querySelector(".message").textContent ="You lost the game";
  //             document.querySelector('.score').textContent=0;
  //         }
  //     }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secreteNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "100px";
});
