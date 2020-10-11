

//This is my array of questions and answers 
var qArray = [
    {
        q: "DOM stands for Document Object Model",
        op: ["true", "false"],
        a: "true",
    },
    {
        q: "API stands for Application Programming Interface",
        op: ["true", "false"],
        a: "true",
    },
    {
        q: "Event Listener is a response to an event",
        op: ["true", "false"],
        a: "true",
    },
    {
        q: "querySelector() helps find a target element",
        op: ["true","false"],
        a: "true",
    },
  

]

// //this variable targets the button
var startBtn = document.getElementById("click-start");
// // this gives the button text
startBtn.innerHTML = "Start!";
// //this section contains the questions and answers 
var questionsEl = document.getElementById("questions");
var questionsArray = document.getElementById('question-text')
var index = 0;
var choicesEl = document.getElementById("choices");
var time = 75;
var timerEl = document.getElementById("time")
var timerId;
var name = document.getElementById('name');
var submitScore = document.getElementById('submit');

// var verifyAnswer = document.getElementById("correct-choice");




function beginQuiz() {
    console.log('test')
    var homePage = document.getElementById("home-page");
    homePage.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerId = setInterval(timer, 1000) 
    timerEl.textContent = time;
    displayQuestions();

}

function displayQuestions() {
    console.log('test1')
    var currentQ = qArray[index];
    var questionText = document.getElementById("question-text");
    questionText.textContent = currentQ.q;
    choicesEl.innerHTML = "";

    currentQ.op.forEach(function(choice, i){
        var button = document.createElement('button')
        button.setAttribute('value', choice)
        button.textContent = choice 
        button.onclick = checkAnswer
        choicesEl.appendChild(button)
    })
}

function checkAnswer() {
    if(this.value !== qArray[index].a) {
        time -= 3
        if(time < 0) {
            time = 0 
        }
        timerEl.textContent = time
    }
    index++;

    if(index === qArray.length) {
        endQuiz();
    } else {
        displayQuestions();
    }
}

function timer() {
    time--
    timerEl.textContent = time; 
    if(time <= 0) {
        endQuiz(); 
    }
}

function endQuiz() {
    clearInterval(timerId);
    const endScreenEl = document.getElementById('endscreen')
    endScreenEl.removeAttribute('class') 
    const finalScore = document.getElementById('finalScore') 
    finalScore.textContent = time 
    questionsEl.setAttribute('class', 'hide')

}

function saveScore() {
    const nameValue = name.value
    if(nameValue !== "") {
        const highScores = JSON.parse(localStorage.getItem("highscores")) || [] 
        const newHighScore = {
            score: time, 
            name: nameValue
        }
        highScores.push(newHighScore)
        localStorage.setItem('highscores', JSON.stringify(highScores))
    }
}

startBtn.onclick = beginQuiz;
submitScore.onclick = saveScore;
    
    // for ( var i = 0; i < qArray.length; i++) {
    //     var opButtons = document.createElement("button");
    //     opButtons.setAttribute("class", "true-false-answers");
    //     opButtons.setAttribute("value", op);
    //     opButtons.textContent = i + "🚀" + op;
    //     opButtons.onclick = checkTrueFalse;
    //     trueFalseChoices.appendChild(opButtons);
    
    // }

// var checkTrueFalse = function() {
//     if (this.value !== qArray[index].a){
//         verifyAnswer.textContent = "wrong"
//         //console.log(correct)
//     }
//     index++;
// }


// startQuizEl.addEventListener("click", beginQuiz)

//var qArray= [{q:"DOM stands for Document Object Model", a: "true"},
//{q:"API stands for Application Programming Interface", a: "true"}
//,{q:"Event Listener is a response to an event", a:"true"},
//{q:"querySelector() doesn't help find a target element", a:"false"},
//{q:"console.log() does not display the elements HTML", a:"false"}]
//currentQ.op.forEach(function (op, i)
