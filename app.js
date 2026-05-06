// Quiz question data
const quizData = [ 
    // Question 1
    { 
        question: "How do you define a function?", 
        options: [
            "let function()", 
            "function functionName()", 
            "define FunctionName", 
            "var FunctionName"
    ], 
    answer: 1,
    },
    // Question 2
    {
        question: "How do you define a variable?",
        options: [
            "variable()",
            "var variableName =", 
            "let variableName =", 
            "variable let = "
        ],
    answer: 2, 
    },
    // Question 3
    {
        question: "What is a while loop  used for?",
        options: [
            "Grids, tables, paired itterations",
            "Stop when you find something",
            "Open-ended repetition",
            "Skip invalid input or unwanted values"
        ],
    answer: 2,
    },
    // Question 4
    {
        question: "What variable declaration cannot be reassigned nor redeclared?",
        options: [
            "let",
            "const",
            "var"
        ],
    answer: 1,
    },
];

// Set default variable values
let currentIndex = 0;
let score = 0;
let answered = false;

// Create function to load the question
function loadQuestion() {
    answered = false;
    const currentQuestion = quizData[currentIndex];
    const questionContainer = document.getElementById('question-container');
    const optionContainer = document.getElementById('options-container');

// Question is displayed
questionContainer.textContent = currentQuestion.question;

// Clears older options
optionContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => { 
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(index));
        optionContainer.appendChild(optionButton);
    });
}

function selectOption(selectedIndex, selectedButton) {
    if (answered) return;
    answered = true;

    const correctIndex = quizData[currentIndex].answer;
    const allButtons = document.querySelectorAll('#options-container button');

    allButtons.forEach((btn, i) => {
        if (i === correctIndex) {
            btn.style.backgroundColor = 'green';
            btn.style.color = 'white';
        } else if (i === selectedIndex) {
            btn.style.backgroundColor = 'red';
            btn.style.color = 'white';
        }
    });

    // Add correct answer to quiz score 
    if (selectedIndex === correctIndex) {
        score++;
    }
}

// Show the score
function showScore () {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('score-container').classList.remove('hidden');
    document.getElementById('score').textContent = `${score} / ${quizData.length}`;
}

// Next question button
document.getElementById('next-button').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

// Restart button
document.getElementById('restart-button').addEventListener('click', () => {
    currentIndex = 0;
    score = 0;
    answered = false;
    document.getElementById('score-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    loadQuestion();
});

loadQuestion();

