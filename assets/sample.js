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
        question: "whats does css stand for?",
        choices: ["Cascading System Style","Cascading Style Sheet","Cascading style System"],
        answer: "Cascading Style Sheet",
    }
]


var quizQuestionsEl = document.createElement("h2");
var quizChoicesEl = document.createElement("button");

var currentQuestion = 0;

var chooseOption = function(){
    currentQuestion++;
    quizzEl.innerHTML = "";
    putQuestion(current);
    putOptions(currentQuestion);


}

var putQuestion = function(questionIndex){
    quizQuestionsEl.textContent = quiz[questionIndex].question;

}

var putOptions =function(questionIndex){
    var choices = quiz[questionIndex].choices;
    for (var i =0; i<choices.length; i++){
        var option = choices;
        var buttonEl = document.createElement('button');
        buttonEl.textContent = option;
        buttonEl.addEventListener("click", function(e) {chooseOption()});
        
        quizChoicesEl.appendChild(buttonEl);
    }
}

putQuestion();
putOptions();



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