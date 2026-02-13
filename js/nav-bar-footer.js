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