const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() { 
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {  
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
} 

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)  
        answerButtonsElement.appendChild(button)   
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")

    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
      } else {
        element.classList.add("wrong")
        }
    }


function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")

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
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [ { text: "JavaScript", correct: false },
                    { text: "terminal/bash", correct: false },
                    { text: "for loops", correct: false },
                    { text: "console.log", correct: true }
                ]
},
{
    question: "How many elements can you apply an 'ID' attribute to?",
    answers: [ { text: "As many as you want", correct: false },
                        { text: "3", correct: false },
                        { text: "1", correct: true },
                        { text: "128", correct: false }
                ]  
},
{
    question: "What does DOM stand for?",
    answers: [ { text: "Document Object Model", correct: true },
                        { text: "Display Object Management", correct: false },
                        { text: "Digital Ordinance Model", correct: false },
                        { text: "Desktop Oriented Mode", correct: false }
                ]  
},
{
    question: "What is used primarily to add styling to a web page?",
    answers: [ { text: "HTML", correct: false },
                        { text: "CSS", correct: true },
                        { text: "Python", correct: false },
                        { text: "React.js", correct: false }
                ] 
},
{
    question: "What HTML tags are JavaScript code wrapped in?",
    answers: [ { text: "&lt;div&gt;", correct: false },
                        { text: "&lt;link&gt;", correct: false },
                        { text: "&lt;head&gt;", correct: false },
                        { text: "&lt;script&gt;", correct: true }
                ] 
},
{
    question: "When is localStorage data cleared?",
    answers: [ { text: "No expiration time", correct: true },
                        { text: "On page reload", correct: false },
                        { text: "On browser close", correct: false },
                        { text: "On computer restart", correct: false }
                ] 
},
{
    question: "What does WWW stand for?",
    answers: [ { text: "Web World Workings", correct: false },
                        { text: "Weak Winter Wind", correct: false },
                        { text: "World Wide Web", correct: true },
                        { text: "Wendy Wants Waffles", correct: false }
                ] 
},
{
    question: "What HTML attribute references an external JavaScript file?",
    answers: [ { text: "href", correct: false },
                        { text: "src", correct: true },
                        { text: "class", correct: false },
                        { text: "index", correct: false }
                ] 
}
]