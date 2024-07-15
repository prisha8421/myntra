// JavaScript for Seasonal Color Analysis Quiz

// Function to show error message
function showErrorMessage(form) {
    let errorMessage = form.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Please select an option before proceeding.';
        form.appendChild(errorMessage);
    }
}

// Show Question 2
function showQuestion2() {
    const form = document.getElementById('question1Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 3
function showQuestion3() {
    const form = document.getElementById('question2Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 4
function showQuestion4() {
    const form = document.getElementById('question3Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question3').style.display = 'none';
        document.getElementById('question4').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 5
function showQuestion5() {
    const form = document.getElementById('question4Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question4').style.display = 'none';
        document.getElementById('question5').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 6
function showQuestion6() {
    const form = document.getElementById('question5Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question5').style.display = 'none';
        document.getElementById('question6').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 7
function showQuestion7() {
    const form = document.getElementById('question6Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question6').style.display = 'none';
        document.getElementById('question7').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Instruction for Question 8
function showInstruction() {
    document.getElementById('question7').style.display = 'none';
    document.getElementById('instruction').style.display = 'block';
}

// Show Question 8
function showQuestion8() {
    const form = document.getElementById('question7Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question7').style.display = 'none';
        document.getElementById('instruction').style.display = 'none'; // Hide instruction when moving to Question 8
        document.getElementById('question8').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 9
function showQuestion9() {
    const form = document.getElementById('question8Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question8').style.display = 'none';
        document.getElementById('question9').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 10
function showQuestion10() {
    const form = document.getElementById('question9Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question9').style.display = 'none';
        document.getElementById('question10').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Show Question 11
function showQuestion11() {
    const form = document.getElementById('question10Form');
    const checked = form.querySelector('input[type="radio"]:checked');
    if (checked) {
        document.getElementById('question10').style.display = 'none';
        document.getElementById('question11').style.display = 'block';
    } else {
        showErrorMessage(form);
    }
}

// Get the modals
var undertoneModal = document.getElementById("undertoneModal");
var eyeToneModal = document.getElementById("eyeToneModal");
var hairToneModal = document.getElementById("hairToneModal");
var vibeModal = document.getElementById("vibeModal");
var contrastModal = document.getElementById("contrastModal");

// Get the buttons that open the modals
var findUndertoneBtn = document.getElementById("findUndertone");
var knowEyeToneBtn = document.getElementById("knowEyeTone");
var referHairTonesBtn = document.getElementById("referHairTones");
var knowVibeBtn = document.getElementById("knowVibe");
var knowContrastBtn = document.getElementById("knowContrast");

// Get the <span> elements that close the modals
var closeUndertone = document.getElementsByClassName("close")[0];
var closeEyeTone = document.getElementsByClassName("close")[1];
var closeHairTone = document.getElementsByClassName("close")[2];
var closeVibe = document.getElementsByClassName("close")[3];
var closeContrast = document.getElementsByClassName("close")[4];

// Function to initialize the quiz
function initializeQuiz() {
    enableNextButton('question1Form', 'findUndertone');
    enableNextButton('question2Form', 'knowEyeTone');
    enableNextButton('question3Form', 'referHairTones');
    enableNextButton('question4Form', 'knowVibe');
    enableNextButton('question5Form', 'paleSkin');
    enableNextButton('question6Form', 'lessPigmented');
    enableNextButton('question7Form', 'lightThinHair');
    enableNextButton('question8Form', 'knowContrast');
    enableNextButton('question9Form', 'significantBetterWarmCool');
    enableNextButton('question10Form', 'significantBetterBrightDark');
    enableNextButton('question11Form', 'wearMutedBright');
}

// Function to enable next button upon radio selection
function enableNextButton(formId, buttonId) {
    const form = document.getElementById(formId);
    const button = form.querySelector(`#${buttonId}`);

    form.addEventListener('change', () => {
        const checked = form.querySelector('input[type="radio"]:checked');
        if (checked) {
            button.removeAttribute('disabled');
            clearErrorMessage(form);
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    });
}

// Function to clear error message
function clearErrorMessage(form) {
    const errorMessage = form.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// When the user clicks the button, open the modal 
findUndertoneBtn.onclick = function() {
    undertoneModal.style.display = "block";
}

knowEyeToneBtn.onclick = function() {
    eyeToneModal.style.display = "block";
}

referHairTonesBtn.onclick = function() {
    hairToneModal.style.display = "block";
}

knowVibeBtn.onclick = function() {
    vibeModal.style.display = "block";
}

knowContrastBtn.onclick = function() {
    contrastModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeUndertone.onclick = function() {
    undertoneModal.style.display = "none";
}

closeEyeTone.onclick = function() {
    eyeToneModal.style.display = "none";
}

closeHairTone.onclick = function() {
    hairToneModal.style.display = "none";
}

closeVibe.onclick = function() {
    vibeModal.style.display = "none";
}

closeContrast.onclick = function() {
    contrastModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == undertoneModal) {
        undertoneModal.style.display = "none";
    } else if (event.target == eyeToneModal) {
        eyeToneModal.style.display = "none";
    } else if (event.target == hairToneModal) {
        hairToneModal.style.display = "none";
    } else if (event.target == vibeModal) {
        vibeModal.style.display = "none";
    } else if (event.target == contrastModal) {
        contrastModal.style.display = "none";
    }
}

// Initializing the quiz
initializeQuiz();

// Variables to track scores for different categories
let hueScore = 0; // For hue (warm/cold)
let valueScore = 0; // For value (light/dark)
let chromaScore = 0; // For chroma (bright/muted)

// Example: Replace with your actual selectedAnswer variables
let selectedAnswerQ1 = 'warm';
let selectedAnswerQ2 = 'warm';
let selectedAnswerQ3 = 'cool';
let selectedAnswerQ4 = 'golden retriever';
let selectedAnswerQ5 = 'pale';
let selectedAnswerQ6 = 'less pigmented';
let selectedAnswerQ7 = 'light and thin';
let selectedAnswerQ8 = 'low contrast';
let selectedAnswerQ9 = 'both';
let selectedAnswerQ10 = 'both';
let selectedAnswerQ11 = ''; // Updated after user submits Question 11

// Function to handle scoring based on user selections
function scoreQuiz() {
    // Reset scores
    hueScore = 0;
    valueScore = 0;
    chromaScore = 0;

    // Question 1-3 (hue)
    if (selectedAnswerQ1 === 'warm') {
        hueScore++;
    }
    if (selectedAnswerQ2 === 'warm') {
        hueScore++;
    }
    if (selectedAnswerQ3 === 'warm') {
        hueScore++;
    }

    // Question 4 (hue)
    if (selectedAnswerQ4 === 'golden retriever') {
        hueScore++;
    }

    // Determine primary hue based on score
    let hueResult = (hueScore >= 3) ? 'warm' : 'cool';

    // Questions 5-7 (value)
    if (selectedAnswerQ5 === 'pale') {
        valueScore++;
    }
    if (selectedAnswerQ6 === 'less pigmented') {
        valueScore++;
    }
    if (selectedAnswerQ7 === 'light and thin') {
        valueScore++;
    }

    // Determine primary value based on score
    let valueResult = (valueScore >= 2) ? 'light' : 'dark';

    // Question 8 (chroma)
    if (selectedAnswerQ8 === 'low contrast') {
        chromaScore++;
    }

    // Determine primary chroma based on score
    let chromaResult = (chromaScore >= 1) ? 'bright' : 'muted';

    // Question 9-11 (secondary features)
    let hueSecondary = (selectedAnswerQ9 === 'both') ? true : false;
    let valueSecondary = (selectedAnswerQ10 === 'both') ? true : false;
    let chromaSecondary = (selectedAnswerQ11 === 'both') ? true : false;

    // Determine final seasonal result based on primary and secondary features
    let seasonalResult = determineSeason(hueResult, valueResult, chromaResult, hueSecondary, valueSecondary, chromaSecondary);

    // Debugging: Log seasonalResult to ensure it's correct
    console.log('Seasonal Result:', seasonalResult);

    // Redirect based on seasonal result
    redirectBasedOnSeason(seasonalResult);

    // Display result to user
    displayResult(seasonalResult);
}

// Function to determine seasonal result based on primary and secondary features
function determineSeason(hueResult, valueResult, chromaResult, hueSecondary, valueSecondary, chromaSecondary) {
    let seasonalResult = '';

    if (hueSecondary && valueSecondary && chromaSecondary) {
        seasonalResult = `${hueResult} ${chromaResult}`;
    } else if (hueSecondary && valueSecondary) {
        seasonalResult = `${valueResult} ${hueResult}`;
    } else if (hueSecondary && chromaSecondary) {
        seasonalResult = `${hueResult} ${chromaResult}`;
    } else if (valueSecondary && chromaSecondary) {
        seasonalResult = `${valueResult} ${chromaResult}`;
    } else {
        // Fallback if primary and secondary features don't align
        seasonalResult = `${hueResult} ${chromaResult}`;
    }

    return seasonalResult;
}

// Function to redirect to respective seasonal page
function redirectBasedOnSeason(seasonalResult) {
    switch (seasonalResult) {
        case 'warm bright':
            window.location.href = 'truespring.html';
            break;
        case 'warm muted':
            window.location.href = 'trueautumn.html';
            break;
        case 'cool bright':
            window.location.href = 'truesummer.html';
            break;
        case 'cool muted':
            window.location.href = 'truewinter.html';
            break;
        case 'light warm':
            window.location.href = 'lightspring.html';
            break;
        case 'light cool':
            window.location.href = 'lightsummer.html';
            break;
        case 'dark warm':
            window.location.href = 'darkautumn.html';
            break;
        case 'dark cool':
            window.location.href = 'darkwinter.html';
            break;
        case 'muted warm':
            window.location.href = 'softautumn.html';
            break;
        case 'muted cool':
            window.location.href = 'softwinter.html';
            break;
        case 'bright warm':
            window.location.href = 'brightspring.html';
            break;
        case 'bright cool':
            window.location.href = 'brightwinter.html';
            break;
        default:
            // Default redirect if no exact match (though all cases should ideally be covered)
            window.location.href = 'default.html';
            break;
    }
}

// Function to display result to user
function displayResult(result) {
    // Update your DOM to display the result, e.g., showing it in a <div> with id "result"
    document.getElementById('result').innerText = `Your seasonal color analysis result is: ${result}`;
}

// Event listener for the submit button in Question 11
document.getElementById('question11Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    selectedAnswerQ11 = document.querySelector('input[name="wearMutedBright"]:checked').value;
    scoreQuiz(); // Call function to handle quiz submission
});
