// Quiz question data
const quizData = [ 
    // Question 1
    { 
        question: "What is a tuple?", 
        options: [
            "An ordered collection of items that cannot be changed", 
            "An unordered collection of unique items", 
            "An ordered collection of key-value pairs", 
            "An ordered collection of items that can be changed"
    ], 
    answer: 0,
    },
    // Question 2
    {
        question: "What is a dictionary?",
        options: [
            "An ordered collection of items that cannot be changed", 
            "An unordered collection of unique items", 
            "An ordered collection of key-value pairs", 
            "An ordered collection of items that can be changed"
        ],
    answer: 2, 
    },
    // Question 3
    {
        question: "What does 'NOT' return?",
        options: [
            "True if the variable is false, and vice versa",
            "True if the variable is true and vice versa"
        ],
    answer: 0,
    }
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

