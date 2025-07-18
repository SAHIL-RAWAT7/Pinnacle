// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Add Dark Mode Toggle Button
const navRight = document.querySelector('.flex.items-center');
const darkToggleBtn = document.createElement('button');
darkToggleBtn.id = "dark-mode-toggle";
darkToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
navRight.appendChild(darkToggleBtn);

// Dark Mode Toggle Logic
darkToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    updateIcon();
});

// Load Theme on Page Load
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}
updateIcon();

function updateIcon() {
    darkToggleBtn.innerHTML = document.documentElement.classList.contains('dark')
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

// Intersection Observer for Fade-in
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-fade-in').forEach(el => observer.observe(el));

// Animate Skill Bars
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.bg-blue-600, .bg-green-600, .bg-yellow-500, .bg-blue-400, .bg-red-500, .bg-gray-700, .bg-purple-600, .bg-green-500');
            if (progress) {
                progress.style.width = progress.getAttribute('style').match(/width:\s*(\d+%)/)[1];
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(skill => skillObserver.observe(skill));

// Contact Form EmailJS
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    alert("Message sent successfully!");
                    this.reset();
                }, () => {
                    alert("Failed to send message. Please try again.");
                });
        });
    }
});
