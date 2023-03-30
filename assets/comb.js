// header
var timerEl = document.getElementById("timer");
//main
var quizzEl = document.getElementById("quizz");
var ulEl = document.createElement("ul");
//start screen
var startEl = document.createElement("button");
var titleEl = document.createElement("h2");
var explanationEl = document.createElement("p");
var pEl = document.createElement("p");

//quiz 
var quiz = [
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "HyperText Makeup Language", "Home Made Language"],
        answer: "HyperText Markup Language",
    },
    {
        question: "What is the correct HTML element for inserting a line break? ",
        choices: ["<br>", "<li>", "<break>"],
        answer: "<br>",
    },
    {
        question: "What does css stand for?",
        choices: ["Cascading System Style","Cascading Style Sheet","Cascading style System"],
        answer: "Cascading Style Sheet",
    }
]

var quizQuestionsEl = document.createElement("h2");
var quizChoicesEl = document.createElement("ul");
quizzEl.appendChild(quizQuestionsEl);
quizzEl.appendChild(quizChoicesEl);

//inputInfo screen var
var endMessageEl = document.createElement("h2");
var scoreIsEl = document.createElement("p");
var initialEl = document.createElement("input");
var yourInitialIsEl = document.createElement("p");
var submitEl = document.createElement("button");

//highscore
var highScoreEl = document.createElement("h2");



//timer
var secondLeft = 120;

function setTime (){
  var timerInterval = setInterval(function () {
      secondLeft--;
      timerEl.textContent = "Time: " + secondLeft;
  
      if (secondLeft < 1) {
        clearInterval(timerInterval); //function change to the score
        inputInfo();
      }
    }, 1000);
  }

  //init screen

function init() {
    quizzEl.innerHTML = "";
    quizzEl.appendChild(titleEl);
    titleEl.textContent = "Coding Quiz Challenge";
    quizzEl.appendChild(explanationEl);
    explanationEl.textContent =
      "Try to answer the following code-related qustions within the time limit. Keep in mind incorrect answer will penalize your scoretime  by ten sconds!";
    //append button
    quizzEl.appendChild(ulEl);
    ulEl.appendChild(startEl);
    startEl.textContent = "Start";
    startEl.setAttribute("id", "start");
  }
  init();

  startEl.addEventListener('click', () => {
    setTime();
    quizzEl.innerHTML = "";
    putQuestion();
    putChoices();
  });
  

  //quizzPart
var currentQuestion = 0;
var points = 0;
var correctOrIncorrectEl = document.createElement("h3"); 
var correctOrIncorrect;


var chooseOption = function(chosen){
    
    var correctOptionIndex = quiz[currentQuestion].choices.indexOf(quiz[currentQuestion].answer);
    var correctOption = quiz[currentQuestion].choices[correctOptionIndex];

    //need to add correct message

    if (chosen == correctOption){
        points +=10;
        console.log("correct")
        correctOrIncorrect.textContent = "Correct!";
    }else{
        secondLeft -=10;
        console.log("incorrect!")
        correctOrIncorrect.textContent = "Incorrect!";
    }

    //check how many questions leave
    if (currentQuestion == quiz.length - 1) {
        inputInfo();
        secondLeft = 1;
    } else {
        currentQuestion++;
        quizChoicesEl.innerHTML="";
        // clearCorrect();
        putQuestion();
        putChoices();
    }
}

// function clearCorrect (){
//     body.innerHTML.addEventListener("click", () => {correctOrIncorrect = "" });
// }

var putQuestion = function(){
    quizzEl.innerHTML =""; //
    quizQuestionsEl.textContent = quiz[currentQuestion].question;
    quizzEl.appendChild(quizQuestionsEl);    
}


var putChoices = function(){
    
    var choices = quiz[currentQuestion].choices;

    for (var i =0; i<choices.length; i++){
        var option = choices[i];
        var buttonEl = document.createElement('button');
        buttonEl.textContent = option;
        quizChoicesEl.appendChild(buttonEl);

        buttonEl.addEventListener("click", 
        function(e) {
            chooseOption (e.target.innerText);
        }
        );
        quizzEl.appendChild(quizChoicesEl);
    }
    correctOrIncorrect = quizzEl.appendChild(correctOrIncorrectEl);
    
}
var initial ="";
function inputInfo() {
    quizzEl.innerHTML = "";
  
    quizzEl.appendChild(endMessageEl);
    endMessageEl.textContent = "All done!";
    quizzEl.appendChild(scoreIsEl);
    scoreIsEl.textContent = "Your score is " + points +" Points!"; //score
  
    quizzEl.appendChild(yourInitialIsEl);
    yourInitialIsEl.textContent = "Your Initial: ";
  
    quizzEl.appendChild(initialEl);
    initial =  initialEl.value.trim() ;
    initialEl.setAttribute("type", "text");
    
  
    quizzEl.appendChild(submitEl);
    submitEl.textContent = "Submit";
    submitEl.setAttribute("id", "submit");;

  }

   submitEl.addEventListener('click', () => {
    quizzEl.innerHTML = "";
    saveScore();
    highScore();
}
   )

var highScores = [];

   function saveScore(){
    // Create an object to store the user's initials and score
  var userScore = {
      initials: initial,
      score: points,
    };

    // localStorage.setItem("userScore",JSON.stringify(userScore));
    // Get the existing scores from local storage or create an empty array if there are no existing scores
  
    // Add the new score to the array
    highScores.push(userScore);
  
    // Sort the scores in descending order by score
    // highScores.sort(function(a, b) {
    //   return b.score - a.score;
    // });
    // Save the updated high scores to local storage
   
    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(userScore);

  }

function highScore() {
    quizzEl.innerHTML = "";
  
    highScoreEl.textContent = "High Scores";
    quizzEl.appendChild(highScoreEl);
  
    // Get the existing high scores from local storage or create an empty array if there are no existing scores
    highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // Sort the scores in descending order by score
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });

    // Display only the top 10 scores
    var numScores = Math.min(highScores.length, 10);
    for (var i = 0; i < numScores; i++) {
      var score = highScores[i];
      var scoreEl = document.createElement("li");
      scoreEl.textContent = score.initials + " : " + score.score + " Points";
      quizzEl.appendChild(scoreEl);
    }
  
    // Add a button to go back to the start screen
    var goBackEl = document.createElement("button");
    goBackEl.textContent = "Go Back";
    quizzEl.appendChild(goBackEl);
  
    goBackEl.addEventListener("click", function() {
      secondLeft = 120;
      currentQuestion = 0;
      points = 0;
      init();
    });
  
    // Add a button to clear the high scores
    var clearScoresEl = document.createElement("button");
    clearScoresEl.textContent = "Clear High Scores";
    quizzEl.appendChild(clearScoresEl);
  
    clearScoresEl.addEventListener("click", function() {
      localStorage.removeItem("highScores");
      highScore();
    });
  }
  
