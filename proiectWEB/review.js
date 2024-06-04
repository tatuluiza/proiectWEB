
const reviewsContainer = document.querySelector('.reviews-container');

// Array of random usernames
const usernames = ['SkincareQueen', 'GlowGetter', 'BeautyGuru', 'SkinEnthusiast', 'RadiantSkin'];
// Array of random comments// Arrays of comments for different star ratings
const comments = {
    1: [
        "Didn't see any improvement in my skin.",
        "Disappointed with the results.",
        "Would not recommend this routine."
    ],
    2: [
        "Results were okay, but not great.",
        "Expected better results for the price.",
        "Not the best skincare routine I've tried."
    ],
    3: [
        "Starting to see some improvement in my skin.",
        "Decent results, but could be better.",
        "Neutral experience with this routine."
    ],
    4: [
        "Very satisfied with the results!",
        "Impressed by how well this routine works.",
        "My skin has improved significantly!"
    ],
    5: [
        "This skincare routine changed my life!",
        "I've never felt better about my skin!",
        "Highly recommend this routine to everyone!"
    ]
};

// Function to generate random reviews
function generateRandomReviews(numReviews) {
    for (let i = 0; i < numReviews; i++) {
        const username = usernames[Math.floor(Math.random() * usernames.length)];
        const stars = Math.floor(Math.random() * 5) + 1;
        const comment = comments[stars][Math.floor(Math.random() * comments[stars].length)]; // Randomly select a comment from the array based on star rating
        
        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `
            <div class="username">${username}</div>
            <div class="stars">${'★'.repeat(stars)}</div>
            <div class="comment">${comment}</div>
        `;
        
        reviewsContainer.appendChild(review);
    }
}

// Call the function to generate 5 random reviews
generateRandomReviews(5);

const container = document.querySelector('.reviews-container');
const reviews = document.querySelectorAll('.review');
const reviewWidth = reviews.length ? reviews[0].offsetWidth : 0;
const containerWidth = container.offsetWidth;
const totalWidth = reviewWidth * reviews.length;
const animationDuration = totalWidth / containerWidth * 5; // Adjust multiplier for speed

container.style.animationDuration = animationDuration + 's';


// Function to handle adding a review
function addReview() {
    const username = document.getElementById('usernameInput').value.trim();
    const starRating = parseInt(document.getElementById('starRatingInput').value);
    const comment = document.getElementById('commentInput').value.trim();
    
    if (!username || !comment) {
        alert('Please enter a username and a comment.');
        return;
    }
    
    // Create review object
    const review = {
        username: username,
        starRating: starRating,
        comment: comment
    };
    
    // Get existing reviews from local storage or initialize as empty array
    let existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    
    // Add new review to array
    existingReviews.push(review);
    
    // Save updated reviews array to local storage
    localStorage.setItem('reviews', JSON.stringify(existingReviews));
    
    // Clear input fields
    document.getElementById('usernameInput').value = '';
    document.getElementById('starRatingInput').value = '1';
    document.getElementById('commentInput').value = '';
    
    // Reload reviews
    loadReviews();
}

// Function to load reviews from local storage and display them
function loadReviews() {
    // const reviewsContainer = document.getElementById('reviewsContainer');
    
    // // Clear existing reviews
    // reviewsContainer.innerHTML = '';
    
    // Get reviews from local storage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    
    // Populate reviews
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <div class="username">${review.username}</div>
            <div class="stars">${'★'.repeat(review.starRating)}</div>
            <div class="comment">${review.comment}</div>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Add event listener for Add Review button
document.getElementById('addReviewBtn').addEventListener('click', addReview);

// Load existing reviews when the page loads
loadReviews();

function generateFooter() {
    const footerContent = `
    <footer class="footer mt-auto py-3">
    <div class="socialIcons d-flex justify-content-end">
       <a href="https://www.tiktok.com/@careskincare" target="_blank"> <img src="assets/tiktok.png" alt=""></a>
       <a href="https://www.facebook.com/careskincare1" target="_blank"> <img src="assets/fb.png" alt=""></a>
       <a href="https://www.instagram.com/careskincare/" target="_blank"><img src="assets/insta.png" alt=""></a>
    </div>
</footer>

    `;
    return footerContent;
}//dinamic
document.getElementById("footer").innerHTML = generateFooter();