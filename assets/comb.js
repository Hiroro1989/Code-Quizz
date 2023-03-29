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


var chooseOption = function(chosen){
    
    var correctOptionIndex = quiz[currentQuestion].choices.indexOf(quiz[currentQuestion].answer);
    var correctOption = quiz[currentQuestion].choices[correctOptionIndex];

    //need to add correct message

    if (chosen == correctOption){
        points +=10;
        console.log("correct")
    }else{
        secondLeft -=10;
        console.log("incorrect!")
    }

    //check how many questions leave
    if (currentQuestion == quiz.length - 1) {
        inputInfo();
        secondLeft = 1;
    } else {
        currentQuestion++;
        quizChoicesEl.innerHTML="";
        putQuestion();
        putChoices();
    }
}

var putQuestion = function(){
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
}

var initial = "";
var initials =[];

function inputInfo() {
    quizzEl.innerHTML = "";
  
    quizzEl.appendChild(endMessageEl);
    endMessageEl.textContent = "All done!";
    quizzEl.appendChild(scoreIsEl);
    scoreIsEl.textContent = "Your score is " + points +" Points!"; //score
  
    quizzEl.appendChild(yourInitialIsEl);
    yourInitialIsEl.textContent = "Your Initial: ";
  
    quizzEl.appendChild(initialEl);
    initial = quizzEl.appendChild(initialEl); //inital var
    initialEl.setAttribute("type", "text");
    
  
    quizzEl.appendChild(submitEl);
    submitEl.textContent = "Submit";
    submitEl.setAttribute = ("id", "submit");

  }

   submitEl.addEventListener('click', () => {
    quizzEl.innerHTML = "";
    saveScore();
    highScore();
}
   )

var highScores;

   function saveScore(){
    // Create an object to store the user's initials and score
  var userScore = {
      initials: initials.value,
      score: points,
    };
  
    // Get the existing scores from local storage or create an empty array if there are no existing scores
    highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // Add the new score to the array
    highScores.push(userScore);
  
    // Sort the scores in descending order by score
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    // Save the updated high scores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

function highScore(){
    quizzEl.append(highScoreEl);
    highScoreEl.textContent = "High Scores!";
    
for (var i = 0; i<initials.length; i++){
    initial =initials[i];
    var li = document.createElement("li");
    li.textContent = initials;

}

}
