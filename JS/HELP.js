const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');
const nav = document.querySelector('.carousel-nav');
const indicators = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

// Update indicators to reflect the current slide
const updateIndicators = (currentIndicator, targetIndicator) => {
  currentIndicator.classList.remove('current-slide');
  targetIndicator.classList.add('current-slide');
};

// Move to a target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Update slide based on target index
const updateSlide = (targetIndex) => {
  const currentSlide = track.querySelector('.current-slide');
  const targetSlide = slides[targetIndex];
  const currentIndicator = nav.querySelector('.current-slide');
  const targetIndicator = indicators[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateIndicators(currentIndicator, targetIndicator);
};

// Event listener for the Next button
nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const currentIndex = slides.indexOf(currentSlide);
  const nextIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
  updateSlide(nextIndex);
});

// Event listener for the Previous button
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const currentIndex = slides.indexOf(currentSlide);
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
  updateSlide(prevIndex);
});

// Event listener for the indicator buttons
nav.addEventListener('click', (e) => {
  const targetIndicator = e.target.closest('button');
  if (!targetIndicator) return;

  const targetIndex = indicators.indexOf(targetIndicator);
  updateSlide(targetIndex);
});