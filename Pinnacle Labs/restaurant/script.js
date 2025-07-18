const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Menu Tab Switching
        const menuTabs = document.querySelectorAll('.menu-tab');
        const menuSections = document.querySelectorAll('.menu-section');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('bg-amber-500', 'text-white'));
                menuTabs.forEach(t => t.classList.add('bg-gray-200', 'hover:bg-gray-300'));
                
                // Add active class to clicked tab
                tab.classList.add('bg-amber-500', 'text-white');
                tab.classList.remove('bg-gray-200', 'hover:bg-gray-300');
                
                // Hide all menu sections
                menuSections.forEach(section => section.classList.add('hidden'));
                
                // Show selected menu section
                const tabName = tab.getAttribute('data-tab');
                document.getElementById(tabName).classList.remove('hidden');
            });
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Reservation Form Submission
        const reservationForm = document.getElementById('reservation-form');
        const reservationModal = document.getElementById('reservation-modal');
        const closeModal = document.getElementById('close-modal');
        
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            reservationModal.classList.remove('hidden');
            reservationForm.reset();
        });
        
        closeModal.addEventListener('click', () => {
            reservationModal.classList.add('hidden');
        });
        
        // Set minimum date for reservation to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').min = today;
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-fade-in');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight - 50) {
                    element.classList.add('opacity-100');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);