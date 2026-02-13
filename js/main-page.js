// Preloader - Hides after page loads
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const loadingText = document.querySelector('.loading-text');
  
  if (preloader && loadingText) {
    const messages = [
      "Editing your masterpiece...",
      "Buffering creativity...",
      "Rendering cool stuff...",
      "Almost there...",
      "Setting up the studio..."
    ];
    
    loadingText.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 2000);
  }
});

// Animation on Scroll Function
const animateOnScroll = () => {
    // Get all elements that should animate when scrolled into view
    const elements = document.querySelectorAll('.domain-card, .project-card, .gear-card');
    
    elements.forEach(element => {
        // Get element's position relative to viewport
        const elementPosition = element.getBoundingClientRect().top;
        // Calculate trigger point (1/3 from bottom of viewport)
        const screenPosition = window.innerHeight / 1.3;
        
        // If element is above the trigger point, make it visible
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize Page Elements
document.addEventListener('DOMContentLoaded', () => {
    // Get all elements that will animate on scroll
    const animatedElements = document.querySelectorAll('.domain-card, .project-card, .gear-card');
    
    // Set initial hidden state for all animated elements
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)'; // Start slightly below
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Check immediately in case elements are already in view
    animateOnScroll();
});

// Add scroll event listener to trigger animations
window.addEventListener('scroll', animateOnScroll);

// Play Button Interactions
const playButtons = document.querySelectorAll('.play-icon');
playButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent interfering with Digital Dreams click
        const parent = this.closest('.project-thumbnail');
        if (parent && parent.classList.contains('digital-dreams-thumbnail')) {
            // Let the parent handle the video logic
            return;
        }

        // Animate button press effect
        this.style.transform = 'scale(1.2)';
        this.style.backgroundColor = 'rgba(255, 107, 107, 0.8)';

        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }, 300);

        // Placeholder for other projects
        alert('Video player would open here!');
    });
});
function playDigitalDreams() {
  const video = document.getElementById("digitalDreamsVideo");
  const playIcon = document.querySelector(".digital-dreams-thumbnail .play-icon");

  // If video is hidden, show and play it
  if (video.style.display === "none") {
    video.style.display = "block";
    playIcon.style.display = "none";
    video.play();
  } else {
    // If video is visible, pause and hide it
    video.pause();
    video.style.display = "none";
    playIcon.style.display = "flex";
  }
}