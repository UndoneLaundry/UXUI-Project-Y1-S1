// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" id="modal-image">
    `;
    document.body.appendChild(modal);
    
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        const photos = document.querySelectorAll('.photo-item');
        
        photos.forEach(photo => {
            if (filter === 'all' || photo.dataset.category === filter) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });
    });
});
    
    // Add click event to all gallery images
    document.querySelectorAll('.photo-item img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImg.src = '';
        modalImg.alt = '';
    });
    
    // Close when clicking outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
            modalImg.alt = '';
        }
    });
});

// Show/hide the up arrow button on scroll
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    if (window.scrollY > 200) {
        btn.classList.remove('d-none');
    } else {
        btn.classList.add('d-none');
    }
});

document.getElementById('scrollTopBtn')?.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});