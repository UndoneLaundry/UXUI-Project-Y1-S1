// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');

if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
        // Toggle mobile menu visibility
        nav.classList.toggle('active');
        
        // Switch between hamburger and close icons
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Header Scroll Effect - Changes appearance when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            // Scrolled state - darker background with shadow
            header.style.backgroundColor = 'rgba(10, 10, 20, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            // Default state - semi-transparent background
            header.style.backgroundColor = 'rgba(15, 15, 27, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
});

// Animation on scroll - UPDATED VERSION
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.team-card, .table-responsive');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements with hidden state - UPDATED VERSION
const initializeAnimations = () => {
    const animatedElements = document.querySelectorAll('.team-card, .table-responsive');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Initial check in case elements are already in view
    animateOnScroll();
};

// Set up event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    window.addEventListener('scroll', animateOnScroll);
});