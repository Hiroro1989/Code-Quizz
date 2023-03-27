//select timer element
var timerEl = document.getElementById("timer");
var quizzEl = document.getElementById("quizz");
var questionEl = document.getElementById("question");
var explonationEl = document.getElementById("explonation");

//createElement
var buttonEl = document.createElement("button");
var pEl = document.createElement("p");
var inputEl = document.createElement("input");

//initial
var initial = "";


//start screen
function start (){
questionEl.textContent = "Coding Quiz Challenge";
explonationEl.textContent = "Try to answer the following code-related qustions within the time limit. Keep in mind incorrect answer will penalize your scoretime  by ten sconds!";
//append button
quizzEl.appendChild (buttonEl);
buttonEl.textContent = "Start";
buttonEl.setAttribute("id", "start");
}

// time count

var secondLeft = 2;

//hit the start button, then count down
buttonEl.addEventListener("click",
function setTime(){

    var timerInterval = setInterval(function(){
        secondLeft--;
        timerEl.textContent = "Time: " + secondLeft;

        if(secondLeft < 1){
            // add later : going to the high score view
            clearInterval(timerInterval); //function change to the score 
            inputInfo();
        }

    }, 1000)
})

//quizz is done
function inputInfo (){

    questionEl.textContent = "All done!"
    explonationEl.textContent = "Your score is " + ""; //score
    
    quizzEl.appendChild(pEl);
    pEl.textContent = "Your Initial: "
    
    initial = quizzEl.appendChild (inputEl); //inital var
    inputEl.setAttribute('type', 'text');
    
    quizzEl.appendChild(buttonEl);
    buttonEl.textContent = "Submit";
    buttonEl.setAttribute = ("id", "submit");
    buttonEl.addEventListener('click', highScore());
    }

function highScore(){
    questionEl.textContent = "High Score!";

    quizzEl.appendChild(buttonEl);
    buttonEl.textContent = "OK";
    buttonEl.setAttribute = ("id", "to-start");
    buttonEl.addEventListener('click', start());

}

start();
setTime();




    



// start > start button
// timer counts start
// quizz shows
//as soon as timer becomes 0
//score part

