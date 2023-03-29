var quizzEl = document.getElementById("quizz");

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



var currentQuestion = 0;
var points = 0;


var chooseOption = function(chosen){
    
    var correctOptionIndex = quiz[currentQuestion].answer;
    var correctOption = quiz[currentQuestion].choices[correctOptionIndex];

    if (chosen == correctOption){
        points +=10;
    }
    //else{10 substract}

    // console.log("10pts");
    currentQuestion++;
    quizChoicesEl.innerHTML="";
    putQuestion();
    putChoices();
}

var putQuestion = function(){
    quizQuestionsEl.textContent = quiz[currentQuestion].question;
    
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
        
    }
}

putQuestion();
putChoices();




// function quizQuesion(){
//    //select question

//     quizzEl.appendChild(quizQuestionsEl);
//     quizzEl.appendChild(quizChoicesEl);    


//     // for (var i=0; i<quiz.choices.length; i++){
//     //     quizzEl.appendChild(quizChoicesEl);    
//     //     quizChoicesEl.textContent = quiz.answer[i];

//     //  }

//     for(var i =0; i<quiz.length; i++){
//     quizQuestionsEl.textContent = quiz[i].question;
//     quizChoicesEl.textContent = quiz[i].answer;
//     }


// }

// quizQuesion();