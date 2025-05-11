const card = document.getElementById('myCard');

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

const cardContainer = document.querySelector('.card-container');
const fadeInText = document.getElementById('fade-in-text');

cardContainer.addEventListener('click', () => {
  // Add a class to trigger the flip (you likely have this already)
  cardContainer.classList.toggle('flipped');

  // Wait for a short delay (after the flip animation starts) and then trigger the fade-in
  setTimeout(() => {
    fadeInText.classList.add('start-fade');
  }, 500); // Adjust this delay (in milliseconds) to match your flip animation duration
});