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
const answerButton = document.getElementById ("answer-buttons")
const nextButton = document.getElementById ("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion ();
} 