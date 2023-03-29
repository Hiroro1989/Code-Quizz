// header
var timerEl = document.getElementById("timer");
//main
var quizzEl = document.getElementById("quizz");
var ulEl = document.createElement("ul");
//start screen
var startEl = document.createElement("button");
var titleEl = document.createElement("h2");
var explonationEl = document.createElement("p");
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



//timer
var secondLeft = 60;

function setTime (){
  var timerInterval = setInterval(function () {
      secondLeft--;
      timerEl.textContent = "Time: " + secondLeft;
  
      if (secondLeft < 1) {
        clearInterval(timerInterval); //function change to the score
      //   inputInfo();
      }
    }, 1000);
  }

  //initial screen

function init() {
    quizzEl.innerHTML = "";
    quizzEl.appendChild(titleEl);
    titleEl.textContent = "Coding Quiz Challenge";
    quizzEl.appendChild(explonationEl);
    explonationEl.textContent =
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
    var messageEl = document.createElement("span");

    if (chosen == correctOption){
        points +=10;
        quizzEl.append(messageEl);
        messageEl.textContent = "Correct!"
        console.log("correct")
    }else{
        secondLeft -=10;
        console.log("incorrect!")
    }

    // console.log("10pts");
    currentQuestion++;
    quizChoicesEl.innerHTML="";
    putQuestion();
    putChoices();
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

