// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to nav items on click
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add a subtle parallax effect to the background
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.setProperty('--mouse-x', x);
    document.body.style.setProperty('--mouse-y', y);
    
    const beforeElement = document.body.querySelector('::before');
    if (beforeElement) {
        beforeElement.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    }
});

// Add animation to the hero text when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroText.style.transition = 'all 1s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 300);
    
    // Animate project cards and education items on scroll
    const projectCards = document.querySelectorAll('.project-card');
    const educationItems = document.querySelectorAll('.education-item');
    const aboutElements = document.querySelectorAll('.about-image, .about-intro, .about-details, .skills-container, .personal-info');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });
    
    educationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        observer.observe(item);
    });
    
    aboutElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        observer.observe(element);
    });
    
    // Add animation class when element is in view
    document.addEventListener('scroll', () => {
        projectCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight * 0.8);
            
            if (isInView) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        educationItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight * 0.8);
            
            if (isInView) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
        
        aboutElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight * 0.8);
            
            if (isInView) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
});

// Handle project card clicks to open links in new tab
document.querySelectorAll('.view-project').forEach(link => {
    link.addEventListener('click', function(e) {
        // The link will open in a new tab due to target="_blank" in the HTML
        console.log('Opening project:', this.getAttribute('href'));
    });
});