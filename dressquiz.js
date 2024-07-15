// Define quiz questions and answers
const quizData = [
    {
        question: "Shoulders vs. Hips",
        options: [
            { answer: "A. My shoulders are wider than my hips.", value: "A" },
            { answer: "B. My hips are wider than my shoulders.", value: "B" },
            { answer: "C. My shoulders and hips are about the same width.", value: "C" }
        ]
    },
    {
        question: "Waist",
        options: [
            { answer: "A. My waist is well-defined and noticeably smaller than my bust and hips.", value: "A" },
            { answer: "B. My waist is not well-defined and appears straighter.", value: "B" },
            { answer: "C. My waist is slightly defined, but not dramatically different from my bust and hips.", value: "C" }
        ]
    },
    {
        question: "Bust and Hips",
        options: [
            { answer: "A. My bust and hips are full and about the same size.", value: "A" },
            { answer: "B. My hips are noticeably fuller than my bust.", value: "B" },
            { answer: "C. My bust is noticeably fuller than my hips.", value: "C" }
        ]
    },
    {
        question: "Torso Length",
        options: [
            { answer: "A. My torso appears shorter relative to my legs.", value: "A" },
            { answer: "B. My torso appears longer relative to my legs.", value: "B" },
            { answer: "C. My torso and legs appear to be in proportion.", value: "C" }
        ]
    },
    {
        question: "Overall Shape Preference",
        options: [
            { answer: "A. I naturally gravitate towards clothes that accentuate my shoulders and upper body.", value: "A" },
            { answer: "B. I feel more comfortable and stylish in clothes that skim my curves without being too tight.", value: "B" },
            { answer: "C. I love showing off my defined waist and creating a balanced silhouette.", value: "C" }
        ]
    },
    {
        question: "Leg Shape",
        options: [
            { answer: "A. My legs are my strongest feature, and I love to show them off.", value: "A" },
            { answer: "B. My legs are more on the slender side.", value: "B" },
            { answer: "C. My legs are curvy and in proportion to my body.", value: "C" }
        ]
    }
];

let currentQuestion = 0;
let answers = [];

const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.querySelector('.options');
const nextButton = document.getElementById('next-btn');

// Function to load question and options
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.textContent = `${currentQuizData.question}`;
    optionsContainer.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `
            <input type="radio" name="question${currentQuestion + 1}" value="${option.value}">
            <span>${option.answer}</span>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

// Function to handle Next button click
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="question' + (currentQuestion + 1) + '"]:checked');
    
    if (selectedOption) {
        answers.push(selectedOption.value);
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            // All questions answered, calculate result
            calculateResult();
        }
    }
}

// Function to calculate result and redirect based on body type
function calculateResult() {
    let countA = answers.filter(answer => answer === 'A').length;
    let countB = answers.filter(answer => answer === 'B').length;
    let countC = answers.filter(answer => answer === 'C').length;

    let result = "";

    // Determine body type based on answers
    if (countA > countB && countA > countC) {
        result = "apple";
    } else if (countB > countA && countB > countC) {
        result = "pear";
    } else if (countC > countA && countC > countB) {
        result = "hourglass";
    } else {
        result = "rectangle";
    }

    // Redirect to corresponding body type page
    window.location.href = `${result}.html`;
}

// Event listener for Next button click
nextButton.addEventListener('click', nextQuestion);

// Load first question when page loads
loadQuestion();
