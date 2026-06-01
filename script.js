// Contact Information (masked)
const CONTACT_INFO = {
    phone: '+27 63 487 2375',
    email: 'Luckyelectricalworks79@gmail.com',
    whatsapp: '27634872375'
};

// ============================================
// PRELOADER
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        // Initialize AOS after preloader
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, 2000);
});

// ============================================
// SCROLL PROGRESS BAR
// ============================================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// FLOATING PARTICLES
// ============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ============================================
// MASKED CONTACT REVEAL
// ============================================
document.querySelectorAll('.masked-contact').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.classList.contains('revealed')) return;
        
        const contactType = this.getAttribute('data-contact');
        const contactValue = CONTACT_INFO[contactType];
        
        // Animate reveal
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.textContent = contactValue;
            this.classList.add('revealed');
            this.style.transform = 'scale(1)';
            
            // Make clickable after reveal
            if (contactType === 'phone') {
                this.parentElement.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:${contactValue}">${contactValue}</a>`;
            } else if (contactType === 'email') {
                this.parentElement.innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${contactValue}">${contactValue}</a>`;
            }
        }, 200);
    });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(stat => {
                animateCounter(stat);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active', 'prev');
        if (i === index) {
            card.classList.add('active');
        } else if (i < index) {
            card.classList.add('prev');
        }
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
setInterval(nextTestimonial, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// ============================================
// SERVICE MODAL
// ============================================
const modal = document.getElementById('serviceModal');
const modalClose = document.querySelector('.modal-close');
const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const serviceCard = btn.closest('.service-card');
        const serviceTitle = serviceCard.querySelector('h3').textContent;
        const serviceIcon = serviceCard.querySelector('.service-icon i').className;
        
        // Update modal content
        document.querySelector('.modal-title').textContent = serviceTitle;
        document.querySelector('.modal-icon i').className = serviceIcon;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.querySelector('.modal-cta').addEventListener('click', () => {
    closeModal();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// WHATSAPP FLOATING BUTTON
// ============================================
const whatsappFloat = document.getElementById('whatsappFloat');

whatsappFloat.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Check if contact is revealed
    const revealedContacts = document.querySelectorAll('.masked-contact.revealed');
    
    if (revealedContacts.length > 0) {
        // Contact already revealed, open WhatsApp
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi! I'm interested in your electrical services.`, '_blank');
    } else {
        // Show alert to reveal contact first
        alert('Please click "Click to Reveal Phone" in the hero section or contact form to get our WhatsApp number.');
        document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
    }
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `*New Quote Request*\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Service: ${formData.service}\n\n` +
        `Message: ${formData.message}`
    );
    
    // Create email body
    const emailBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Service Needed: ${formData.service}\n\n` +
        `Message:\n${formData.message}`
    );
    
    // Show custom confirmation
    const choice = confirm(
        '📱 How would you like to send your quote request?\n\n' +
        'OK = WhatsApp (Recommended)\n' +
        'Cancel = Email'
    );
    
    if (choice) {
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`, '_blank');
    } else {
        window.location.href = `mailto:${CONTACT_INFO.email}?subject=Quote Request from ${formData.name}&body=${emailBody}`;
    }
    
    // Show success message
    showNotification('Quote request prepared! Opening your preferred app...');
    
    // Reset form
    contactForm.reset();
});

// ============================================
// FORM VALIDATION VISUAL FEEDBACK
// ============================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
            input.style.borderColor = '#4CAF50';
        } else if (input.hasAttribute('required')) {
            input.style.borderColor = '#FF5252';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#0066FF';
    });
    
    input.addEventListener('input', () => {
        if (input.style.borderColor === 'rgb(255, 82, 82)') {
            input.style.borderColor = '#E0E0E0';
        }
    });
});

// Prevent Enter key form submission (except textarea)
document.querySelectorAll('.contact-form input').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            if (form.elements[index + 1]) {
                form.elements[index + 1].focus();
            }
        }
    });
});

// ============================================
// ACTIVE NAVIGATION STATE
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = '#0066FF';
                }
            });
        }
    });
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #0066FF, #0052CC);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        animation: slideInRight 0.5s;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// EASTER EGG - KONAMI CODE
// ============================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        showNotification('⚡ SUPER ELECTRIC MODE ACTIVATED! ⚡');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE BRANDING
// ============================================
console.log(
    '%c⚡ LUCKY ELECTRICAL WORKS PTY ⚡',
    'color: #0066FF; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
);
console.log(
    '%cQuality Work. Professional Service. Guaranteed Peace of Mind.',
    'color: #FFC107; font-size: 14px; font-weight: bold;'
);
console.log(
    '%c💡 Tip: Try the Konami Code for a surprise!',
    'color: #666; font-size: 12px; font-style: italic;'
);

// ============================================
// ANALYTICS TRACKING (Optional)
// ============================================
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('📞 Phone number clicked');
        // Add your analytics tracking here
    });
});

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('📧 Email link clicked');
        // Add your analytics tracking here
    });
});
