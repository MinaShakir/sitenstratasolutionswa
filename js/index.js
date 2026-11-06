// Scroll Reveal Animation Observer
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => observer.observe(el));

// Hamburger menu toggle for mobile
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-navigation');

hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Mobile dropdown toggle for services
const servicesDropdownLi = document.getElementById('services-dropdown-li');
const servicesLink = document.getElementById('services-link');

servicesLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 868) {
        e.preventDefault();
        servicesDropdownLi.classList.toggle('dropdown-open');
    }
});

// Testimonial Manual Click-to-Slide Carousel with Arrows
const track = document.getElementById('testimonialTrack');
const cards = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function alignCarousel() {
    cards.forEach(card => card.classList.remove('active'));
    cards[currentIndex].classList.add('active');

    const cardWidth = cards[0].offsetWidth;
    const gap = 30; // Matches CSS gap
    const wrapperWidth = track.parentElement.offsetWidth;

    // Center active card precisely within the visible wrapper
    const offset = (wrapperWidth / 2) - (cardWidth / 2) - (currentIndex * (cardWidth + gap));
    track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    track.style.transform = `translateX(${offset}px)`;
}

// Next Arrow Handler
nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        alignCarousel();
    }
});

// Prev Arrow Handler
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        alignCarousel();
    }
});

// Recalculate centering when window resizes
window.addEventListener('resize', alignCarousel);

// Initial setup on page load
setTimeout(alignCarousel, 100);
