const imageSection = document.querySelector('.image-section img');

imageSection.addEventListener('mouseover', () => {
  imageSection.style.opacity = 0.7; // Set opacity to 70% on hover
});

imageSection.addEventListener('mouseout', () => {
  imageSection.style.opacity = 1; // Set opacity back to 100% on mouseout
});
