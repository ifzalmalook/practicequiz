const questions = [
    {
        question: "What is the capital city of Brazil?",
        answers: [
            {text: "Buenos Aires", correct: false},
            {text: "Rio de Janeiro", correct: false},
            {text: "Brasilia", correct: true},
            {text: "Santiago", correct: false},

        ]
    
    },

    {
        question: "Which of the following countries is landlocked?",
        answers: [
            {text: "Italy", correct: false},
            {text: "Japan", correct: false},
            {text: "Bolivia", correct: true},
            {text: "Australia", correct: false},

        ]
    
    },

    {
        question: "In which continent is the Sahara Desert located?",
        answers: [
            {text: "South America", correct: false},
            {text: "Africa", correct: true},
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},

        ]
    
    },

    {
        question: "The Great Barrier Reef is situated off the coast of which country?",
        answers: [
            {text: "Mexico", correct: false},
            {text: "Australia", correct: true},
            {text: "Thailand", correct: false},
            {text: "Brazil", correct: false},

        ]
    
    },

    {
        question: "Which river is associated with the city of Cairo?",
        answers: [
            {text: "Nile", correct: true},
            {text: "Amazon", correct: false},
            {text: "Danube", correct: false},
            {text: "Ganges", correct: false},

        ]
    
    },
];

const questionElement = document.getElementById ("question")
const answerButtons = document.getElementById ("answer-buttons")
const nextButton = document.getElementById ("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion ();
} 

function showQuestion () {
    resetState ();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach (answer => {
        const button = document.createElement ("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild (button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener ("click", selectAnswer);
    });
}

function resetState () {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach (button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}; 


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz ();

