const startBtn = document.getElementById("startBtn")
const questionField = document.getElementById("questionField")
const questionContainerElement = document.getElementById("questionContainer")
const startText = document.getElementById("startText")
const questionElement = document.getElementById("question")
const btn = document.getElementById("answerBtn")

let shuffledQuestions, currentQuestionIndex
 
startBtn.addEventListener("click", startGame)

function startGame() { 
    console.log("Started")
    startBtn.classList.add("hide") 
    startText.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5) 
    questionField.classList.remove("hide")
    currentQuestionIndex = 0  
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
} 
 
function showQuestion(question) { 
     questionField.innerText = question.question
      question.answers.forEach(answers => {
        const button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("btn")
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswers)
        btn.appendChild(btn) 
    }) 
} 

function resetState(){
    nextButton.classList.add("hide")
    while (btn.firstChild) {
        btn.removeChild
        (btn.firstChild)

    }
}

function selectAnswers(e) {
    const selectedButton = e.target
}

const questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        answers: [ { text: "strings", correct: false },
                    { text: "booleans", correct: false },
                    { text: "alerts", correct: true },
                    { text: "numbers", correct: false }
                ]
    },
    {
        question: "The condition within an if/else statement is enclosed within __________.",
        answers: [ { text: "quotes", correct: false },
                    { text: "curly brackets", correct: false },
                    { text: "parantheses", correct: true },
                    { text: "square brackets", correct: false }
                ]
        
    },
    {
        question: "Arrays in Javascript can be used to store __________.",
        answers: [ { text: "numbers and strings", correct: false },
                    { text: "other arrays", correct: false },
                    { text: "booleans", correct: false },
                    { text: "all of the above", correct: true }
                ]
    },
    {
        question: "String values must be enclosed within _______ when being assigned variables.",
        answers: [ { text: "commas", correct: false },
                    { text: "curly brackets", correct: false },
                    { text: "quotes", correct: true },
                    { text: "parentheses", correct: false }
                ]
    },
    {
        question: "A very useful tool used turing development and debugging for printing content to the debugger is:",
        answers: [ { text: "JavaScript", correct: false },
                    { text: "terminal/bash", correct: false },
                    { text: "for loops", correct: false },
                    { text: "console.log", correct: true }
                ]
    },
]