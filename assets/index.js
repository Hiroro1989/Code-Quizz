//select timer element
var timerEl = document.getElementById("timer");
var quizzEl = document.getElementById("quizz");

//createElement
var startEl = document.createElement("button");
var titleEl = document.createElement("h2");
var explonationEl = document.createElement("p");

//start screen var
var pEl = document.createElement("p");

//inputInfo screen var
var endMessageEl = document.createElement("h2");
var scoreIsEl = document.createElement("p");
var initialEl = document.createElement("input");
var yourInitialIsEl = document.createElement("p");
var submitEl = document.createElement("button");
// initial
var initial = "";

//high score screen
var highScoreEl = document.createElement("h2");
var toStartEl = document.createElement("button");

// point
// var point = 0;


// var questions = [
//     {
//         question: "What does HTML stand for?",
//         choices: ["HyperText Markup Language", "HyperText Makeup Language", "Home Made Language"],
//         answer: "HyperText Markup Language",
//     },
//     {
//         question: "What is the correct HTML element for inserting a line break? ",
//         choices: ["<br>", "<li>", "<break>"],
//         answer: "<br>",
//     },
//     {
//         question: "whats does css stand for?",
//         choices: ["Cascading System Style","Cascading Style Sheet","Cascading style System"],
//         answer: "Cascading Style Sheet",
//     }
// ]


//start screen
function init() {
  quizzEl.innerHTML = "";
  quizzEl.appendChild(titleEl);
  titleEl.textContent = "Coding Quiz Challenge";
  quizzEl.appendChild(explonationEl);
  explonationEl.textContent =
    "Try to answer the following code-related qustions within the time limit. Keep in mind incorrect answer will penalize your scoretime  by ten sconds!";
  //append button
  quizzEl.appendChild(startEl);
  startEl.textContent = "Start";
  startEl.setAttribute("id", "start");
}

// time count

var secondLeft = 2;

//hit the start button, then count down
startEl.addEventListener("click", function setTime() {
  var timerInterval = setInterval(function () {
    secondLeft--;
    timerEl.textContent = "Time: " + secondLeft;

    if (secondLeft < 1) {
      clearInterval(timerInterval); //function change to the score
      inputInfo();
    }
  }, 1000);
});


//quizz is done
function inputInfo() {
  quizzEl.innerHTML = "";

  quizzEl.appendChild(endMessageEl);
  endMessageEl.textContent = "All done!";
  quizzEl.appendChild(scoreIsEl);
  scoreIsEl.textContent = "Your score is " + ""; //score

  quizzEl.appendChild(yourInitialIsEl);
  yourInitialIsEl.textContent = "Your Initial: ";

  quizzEl.appendChild(initialEl);
  initial = quizzEl.appendChild(initialEl); //inital var
  initialEl.setAttribute("type", "text");

  quizzEl.appendChild(submitEl);
  submitEl.textContent = "Submit";
  submitEl.setAttribute = ("id", "submit");
  submitEl.addEventListener("click", function highScore() {
    quizzEl.innerHTML = "";
    quizzEl.appendChild(highScoreEl);
    highScoreEl.textContent = "High Score!";
  
      quizzEl.appendChild(toStartEl);
      toStartEl.textContent = "OK";
      toStartEl.setAttribute = ("id", "to-start");
    // toStartEl.addEventListener("click", init());
  });
}




init();
// setTime();
inputInfo();






// start > start button
// timer counts start
// quizz shows
//as soon as timer becomes 0
//score part
