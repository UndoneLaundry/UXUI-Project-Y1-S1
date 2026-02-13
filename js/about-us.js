const animateOnScroll = () => {
    const elements = document.querySelectorAll('.milestone-card, .team-card');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight / 1.3;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < triggerPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            // Optional: Reset if you want elements to hide again when scrolled up
            // element.style.opacity = '0';
            // element.style.transform = 'translateY(30px)';
        }
    });
};

// Throttle the scroll event for better performance
const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

window.addEventListener('scroll', throttle(animateOnScroll, 100));

const handleFormSubmit = () => {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Simple validation
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Here you would typically send data to a server
            // const response = await fetch('your-endpoint', {
            //     method: 'POST',
            //     body: JSON.stringify({ name, email, message }),
            //     headers: { 'Content-Type': 'application/json' }
            // });
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message (could be a proper modal instead of alert)
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize mobile menu if the function exists
        if (typeof initMobileMenu === 'function') {
            initMobileMenu();
        }
        
        // Set initial state for animated elements
        const animatedElements = document.querySelectorAll('.milestone-card, .team-card');
        if (animatedElements.length) {
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            });
            
            // Check immediately in case elements are already in view
            animateOnScroll();
            
            // Add scroll event listener with throttling
            window.addEventListener('scroll', throttle(animateOnScroll, 100));
        }
        
        // Initialize form handling
        handleFormSubmit();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});