// script.js - JavaScript functionality for Space Deck flashcard website

console.log('Script loaded, starting initialization');

let flashcards = [];
let currentIndex = 0;
let isFlipped = false;

console.log('Getting DOM elements');
const flashcard = document.getElementById('flashcard');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const cardCounter = document.getElementById('card-counter');

const frontText = document.getElementById('frontText');
const backText = document.getElementById('backText');
console.log('DOM elements retrieved:', {flashcard, prevBtn, nextBtn, shuffleBtn, frontText, backText, cardCounter});

// Load flashcards from JSON file
async function loadFlashcards() {
    console.log('Loading flashcards from JSON file');
    try {
        const response = await fetch('flashcards.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        flashcards = await response.json();
        console.log('Flashcards loaded from JSON:', flashcards.length, 'cards');
        if (flashcards.length === 0) {
            console.log('No flashcards found, disabling buttons');
            document.getElementById('frontText').textContent = 'No flashcards available.';
            document.getElementById('backText').textContent = 'No flashcards available.';
            disableButtons();
            return;
        }
        console.log('Flashcards loaded successfully, displaying first card');
        displayCard();
    } catch (error) {
        console.error('Error loading flashcards:', error);
        document.getElementById('frontText').textContent = 'Error loading flashcards.';
        document.getElementById('backText').textContent = 'Error loading flashcards.';
        disableButtons();
    }
}

// Display current card
function displayCard() {
    console.log('displayCard called, currentIndex:', currentIndex, 'flashcards.length:', flashcards.length);
    if (flashcards.length === 0) {
        console.log('No flashcards to display');
        return;
    }
    const card = flashcards[currentIndex];
    console.log('Displaying card:', currentIndex, 'Front:', card.front, 'Back:', card.back);
    console.log('frontText element:', frontText);
    console.log('backText element:', backText);
    frontText.innerHTML = `<p>${card.front}</p>`;
    backText.innerHTML = `<p>${card.back}</p>`;
    console.log('Card content set, resetting flip state');
    // Reset flip state
    isFlipped = false;
    flashcard.classList.remove('flipped');
    console.log('Card displayed successfully');

    // Update card counter
    updateCardCounter();
}

// Update card counter display
function updateCardCounter() {
    if (cardCounter && flashcards.length > 0) {
        cardCounter.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
        console.log('Card counter updated:', cardCounter.textContent);
    }
}

// Flip card on click with AnimeJS animation
flashcard.addEventListener('click', () => {
    console.log('Flashcard clicked, isFlipped:', isFlipped);
    if (isFlipped) {
        // Flip back to front
        console.log('Flipping back to front');
        anime({
            targets: flashcard,
            rotateY: 0,
            duration: 600,
            easing: 'easeInOutQuad',
            complete: () => {
                console.log('Flip back animation complete');
                isFlipped = false;
                flashcard.classList.remove('flipped');
            }
        });
    } else {
        // Flip to back
        console.log('Flipping to back');
        anime({
            targets: flashcard,
            rotateY: 180,
            duration: 600,
            easing: 'easeInOutQuad',
            complete: () => {
                console.log('Flip to back animation complete');
                isFlipped = true;
                flashcard.classList.add('flipped');
            }
        });
    }
});

// Previous button
prevBtn.addEventListener('click', () => {
    console.log('Previous button clicked');
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    displayCard();
});

// Next button
nextBtn.addEventListener('click', () => {
    console.log('Next button clicked');
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayCard();
});

// Shuffle button
shuffleBtn.addEventListener('click', () => {
    console.log('Shuffle button clicked');
    if (flashcards.length === 0) return;
    // Fisher-Yates shuffle
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    currentIndex = 0;
    displayCard();
});

// Disable buttons if no cards
function disableButtons() {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    shuffleBtn.disabled = true;
    console.log('Buttons disabled due to no flashcards');
}



// Initialize
console.log('Initializing Space Deck application');
loadFlashcards();
console.log('Application initialized');