const adviceText = document.getElementById('adviceText');
const generateBtn = document.getElementById('generateBtn');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeCount = document.getElementById('likeCount');
const dislikeCount = document.getElementById('dislikeCount');

// Sample advice data
const adviceList = [
    "Take risks and conquer your fears.",
    "Learn from your mistakes and keep moving forward.",
    "Stay curious and never stop learning.",
    "Practice gratitude and embrace positivity.",
    "Believe in yourself and your abilities."
];

let currentIndex = 0;
let likes = parseInt(localStorage.getItem('likes')) || 0;
let dislikes = parseInt(localStorage.getItem('dislikes')) || 0;
let hasLiked = false;
let hasDisliked = false;

generateBtn.addEventListener('click', generateAdvice);
likeBtn.addEventListener('click', handleLike);
dislikeBtn.addEventListener('click', handleDislike);

function generateAdvice() {
    adviceText.textContent = adviceList[currentIndex];
    currentIndex = (currentIndex + 1) % adviceList.length;
    
    // Reset like and dislike status
    hasLiked = false;
    hasDisliked = false;
    updateButtons();
}

function handleLike() {
    if (!hasLiked && !hasDisliked) {
        likes++;
        localStorage.setItem('likes', likes);
        likeCount.textContent = likes;
        hasLiked = true;
        updateButtons();
    }
}

function handleDislike() {
    if (!hasDisliked && !hasLiked) {
        dislikes++;
        localStorage.setItem('dislikes', dislikes);
        dislikeCount.textContent = dislikes;
        hasDisliked = true;
        updateButtons();
    }
}

function updateButtons() {
    likeBtn.disabled = hasLiked || hasDisliked;
    dislikeBtn.disabled = hasLiked || hasDisliked;
}

// Initial setup
likeCount.textContent = likes;
dislikeCount.textContent = dislikes;
generateAdvice();
