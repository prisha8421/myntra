document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Calculate scores
    let scoreGlam = 0;
    let scoreNatural = 0;
    let scoreVersatile = 0;
    let scoreEthereal = 0;
    let scoreIngenue = 0;
    
    // Part 1: Your Features
    scoreGlam += parseInt(document.querySelector('input[name="eyes"]:checked').value);
    scoreGlam += parseInt(document.querySelector('input[name="face-shape"]:checked').value);
    scoreGlam += parseInt(document.querySelector('input[name="lips"]:checked').value);
    
    // Part 2: Your Preferences
    scoreGlam += parseInt(document.querySelector('input[name="coverage"]:checked').value);
    scoreGlam += parseInt(document.querySelector('input[name="eye-makeup"]:checked').value);
    scoreGlam += parseInt(document.querySelector('input[name="lip-products"]:checked').value);
    
    // Bonus Round
    const highlightFeature = document.querySelector('input[name="highlight-feature"]:checked').value;
    
    switch (highlightFeature) {
        case 'Glam':
            scoreGlam += 1;
            break;
        case 'Natural':
            scoreNatural += 1;
            break;
        case 'Ingenue':
            scoreIngenue += 1;
            break;
        case 'Versatile':
            scoreVersatile += 1;
            break;
    }
    
    // Determine result
    let result = '';
    if (scoreGlam >= 10) {
        result = 'glam.html';
    } else if (scoreNatural >= 10) {
        result = 'natural.html';
    } else if (scoreVersatile >= 10) {
        result = 'versatile.html';
    } else if (scoreEthereal >= 10) {
        result = 'ethereal.html';
    } else if (scoreIngenue >= 10) {
        result = 'ingenue.html';
    } else {
        result = 'smoky.html';
    }
    
    // Redirect to result page
    window.location.href = result;
});
