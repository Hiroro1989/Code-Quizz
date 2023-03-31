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
  },
  {
      question: "Where in an HTML document is the correct place to refer to an external style sheet? ",
      choices: ["At the end of document", "body section", "head section" ],
      answer: "head section",
  },
  {
      question: "Which HTML tag is used to define an internal style sheet?",
      choices: ["<css>", "<script>", "<style>"],
      answer: "<style>",
  },
  {
      question: "How do you insert a comment in a CSS file?",
      choices: ["/* */","//","<-! -!>"],
      answer: "/* */",
  },
  {
      question: "Which property is used to change the font color?",
      choices: ["background-color", "color", "bg-color"],
      answer: "color",
  },
  {
      question: "What does DOM stand for?",
      choices: ["Document Object Model", " Domestic Object Model", "Dog Oriented Model"],
      answer: "Document Object Model",
  },
  {
      question: "Where is the best place to insert an external JavaScript?",
      choices: ["inside of <body>", "inside of <head>", "inside of <header>"],
      answer: "inside of <body>",
  },
  {
      question: "What is the correct syntax of function expression below?",
      choices: ["var myFunction = function(){};", " function myFunction(){};", "var = function(){};"],
      answer: "var myFunction = function(){};",
  },
  {
      question:"How many percent of websites is the JavaScript used on the client side?",
      choices: ["50%", "74%", "98%"],
      answer: "98%",
  },
  {
      question: "What does API stand for?",
      choices: ["Apple Program Interface ", "Application Programming Interface", "Agile Program Interface"],
      answer: "Application Programming Interface",
  },
  {
      question: "What does DRY stand for?",
      choices: ["Do Reapeat Yourself", "Don't Reapeat Yourself", "Do Respect Yourself"],
      answer: "Don't Reapeat Yourself",
  },
  {
      question: "The # symbol specifies that the selector is?",
      choices: ["id", "hashtag", "class"],
      answer: "id",
  },
  {
      question: "What is strictly equal operator? ",
      choices: ["=","==", "==="],
      answer: "===",
  },
  {
      question: "What is correct for roop syntax?",
      choices: ["for(var i =0, i<5, i++)","for var i=0; i-1; i++", "for(var i=0; i<5; i++"],
      answer: "for(var i=0; i<5; i++",
  },
  {
      question: "what is the commment in JavaScrip?",
      choices: ["//","/* */", "<!-- -->"],
      answer: "//",
  },
  {
      question: "How do you declare a JS variable?",
      choices: ["V vName","var vName", "vari vName"],
      answer: "var vName",
  },
  {
      question: "What is modulus operator in JS?",
      choices: ["=","+", "%"],
      answer: "%",
  },
  {
      question: "What is a semantic element below? ",
      choices: ["<header>","<h1>", "<button>"],
      answer: "<header>",
  },
];

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

function setTime() {
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
  quizChoicesEl.innerHTML = "";
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

startEl.addEventListener("click", () => {
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
var nextButtonEl = document.createElement("Button");
var nextButton;
nextButtonEl.textContent = "Next";
nextButtonEl.style.display = 'none';

var chooseOption = function (chosen) {
  var correctOptionIndex = quiz[currentQuestion].choices.indexOf(
    quiz[currentQuestion].answer
  );
  var correctOption = quiz[currentQuestion].choices[correctOptionIndex];

  //need to add correct message

  if (chosen == correctOption) {
    points += 10;
    correctOrIncorrect.textContent = "Correct!";
    nextButtonEl.style.display = 'block';

    document.querySelectorAll(".choice").forEach(elem => {
      elem.disabled = true;
    });
    // nextButtonEl.textContent = "Next";
  } else {
    
    secondLeft -= 10;
    if (secondLeft<=0){
      secondLeft = 0;
    }
    console.log("incorrect!");
    correctOrIncorrect.textContent = "Incorrect!";
    nextButtonEl.style.display = 'block';

    document.querySelectorAll(".choice").forEach(elem => {
      elem.disabled = true;
    });
    // nextButtonEl.textContent = "Next";
  }
};

nextButtonEl.addEventListener("click", () => {
  //check how many questions leave
  if (currentQuestion == quiz.length - 1) {
    inputInfo();
    secondLeft = 1;
    nextButtonEl.style.display = 'none';
    correctOrIncorrect.textContent = "";

    // nextButtonEl.textContent = "";
  } else {
    currentQuestion++;
    quizChoicesEl.innerHTML = "";
    nextButtonEl.style.display = 'none';
    correctOrIncorrect.textContent = "";


    // nextButtonEl.textContent = "";

    // clearCorrect();
    putQuestion();
    putChoices();
  }
});

// function clearCorrect (){
//     body.innerHTML.addEventListener("click", () => {correctOrIncorrect = "" });
// }

var putQuestion = function () {
  quizzEl.innerHTML = ""; //
  quizQuestionsEl.textContent = quiz[currentQuestion].question;
  quizzEl.appendChild(quizQuestionsEl);
};

var putChoices = function () {
  var choices = quiz[currentQuestion].choices;

  for (var i = 0; i < choices.length; i++) {
    var option = choices[i];
    var buttonEl = document.createElement("button");
    buttonEl.textContent = option;
    buttonEl.classList.add("choice");
    quizChoicesEl.appendChild(buttonEl);
    

    buttonEl.addEventListener("click", function (e) {
      chooseOption(e.target.innerText);
    });
    quizzEl.appendChild(quizChoicesEl);
  }
  correctOrIncorrect = quizzEl.appendChild(correctOrIncorrectEl);
  nextButton = quizzEl.appendChild(nextButtonEl);
};
var initial = "";
function inputInfo() {
  quizzEl.innerHTML = "";

  quizzEl.appendChild(endMessageEl);
  endMessageEl.textContent = "All done!";
  quizzEl.appendChild(scoreIsEl);
  scoreIsEl.textContent = "Your score is " + points + " Points!"; //score

  quizzEl.appendChild(yourInitialIsEl);
  yourInitialIsEl.textContent = "Your Initial: ";

  quizzEl.appendChild(initialEl);
  initial = initialEl.value.trim();
  initialEl.setAttribute("type", "text");

  quizzEl.appendChild(submitEl);
  submitEl.textContent = "Submit";
  submitEl.setAttribute("id", "submit");
}

submitEl.addEventListener("click", () => {
  quizzEl.innerHTML = "";
  saveScore();
  highScore();
});

var highScores = [];

function saveScore() {
  // Create an object to store the user's initials and score
  initial = initialEl.value.trim();
  var userScore = {
    initials: initial,
    score: points,
  };

  // Add the new score to the array
  highScores.push(userScore);
  initial = "";
  points = 0;

  // Save the updated high scores to local storage

  localStorage.setItem("highScores", JSON.stringify(highScores));

}

function highScore() {
  quizzEl.innerHTML = "";

  highScoreEl.textContent = "High Scores";
  quizzEl.appendChild(highScoreEl);

  // Get the existing high scores from local storage or create an empty array if there are no existing scores
  highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  // Sort the scores in descending order by score
  highScores.sort(function (a, b) {
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

  goBackEl.addEventListener("click", function () {
    secondLeft = 120;
    currentQuestion = 0;
    points = 0;
    init();
  });

  // Add a button to clear the high scores
  var clearScoresEl = document.createElement("button");
  clearScoresEl.textContent = "Clear High Scores";
  quizzEl.appendChild(clearScoresEl);

  clearScoresEl.addEventListener("click", function () {
    localStorage.removeItem("highScores");
    highScore();
  });
}
