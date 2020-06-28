//this variable targets the button
var startQuizEl = document.querySelector("#click-start");
// this gives the button text
startQuizEl.innerHTML = "Start!";
//this section contains the questions and answers 
var questionsSection = document.getElementById("section-one");
index = 0;
var trueFalseChoices = document.getElementById("true-false-answers");
var verifyAnswer = document.getElementById("correct-choice");

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




function beginQuiz() {
    var homePage = document.getElementById("home-page");
    homePage.setAttribute("class", "section-one");
    questionsSection.removeAttribute("class");
    displayQuestions();

}

function displayQuestions() {
    var currentQ = qArray[index];
    var questionText = document.getElementById("question-text");
    questionText.textContent = currentQ.q;
    trueFalseChoices.innerHTML = "";

    // for ( var i = 0; i < qArray.length; i++){
    currentQ.op.forEach(function (op, i) {
        var opButtons = document.createElement("button");
        opButtons.setAttribute("class", "true-false-answers");
        opButtons.setAttribute("value", op);
        opButtons.textContent = i + "🚀" + op;
        opButtons.onclick = checkTrueFalse;
        trueFalseChoices.appendChild(opButtons);
    
    })
}
var checkTrueFalse = function() {
    if (this.value !== qArray[index].a){
        verifyAnswer.textContent = "wrong"
        //console.log(correct)
    }
    index++;
}


startQuizEl.addEventListener("click", beginQuiz)

//var qArray= [{q:"DOM stands for Document Object Model", a: "true"},
//{q:"API stands for Application Programming Interface", a: "true"}
//,{q:"Event Listener is a response to an event", a:"true"},
//{q:"querySelector() doesn't help find a target element", a:"false"},
//{q:"console.log() does not display the elements HTML", a:"false"}]
