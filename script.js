const card = document.getElementById('myCard');
const cardContainer = document.querySelector('.card-container');
const fadeInText = document.getElementById('fade-in-text');


card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

cardContainer.addEventListener('click', () => {
  // Add a class to trigger the flip
  cardContainer.classList.toggle('flipped');

  // Wait for a short delay (after the flip animation starts) and then trigger the fade-in
  setTimeout(() => {
    fadeInText.classList.add('start-fade');
  }, 500); // Adjust this delay to match flip animation duration
});