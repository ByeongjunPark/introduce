document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // THEME TOGGLE
    // ==========================================================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference, default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ==========================================================================
    // MOBILE NAVIGATION DRAWER
    // ==========================================================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMobileMenu = () => {
        const isOpen = mobileNav.classList.toggle('open');
        const icon = mobileMenuToggle.querySelector('i');
        
        if (isOpen) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    };

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('open') && 
            !mobileNav.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            toggleMobileMenu();
        }
    });

    // ==========================================================================
    // WORK EXPERIENCE / TIMELINE FILTER
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(button => button.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            timelineItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                } else if (filterValue === 'teaching' && category === 'teaching') {
                    item.classList.remove('hidden');
                } else if (filterValue === 'policy' && category === 'policy') {
                    item.classList.remove('hidden');
                } else if (filterValue === 'projects' && category === 'projects') {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
            
            // Re-trigger scroll reveal for visible items
            revealOnScroll();
        });
    });

    // ==========================================================================
    // SCROLL REVEAL ANIMATION
    // ==========================================================================
    // Add CSS transition rules dynamically for scroll reveal elements
    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-element.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Targets to animate
    const elementsToReveal = [
        ...document.querySelectorAll('.framework-card'),
        ...document.querySelectorAll('.eco-card'),
        ...document.querySelectorAll('.pub-item'),
        ...document.querySelectorAll('.timeline-item'),
        ...document.querySelectorAll('.leader-card'),
        ...document.querySelectorAll('.award-item'),
        ...document.querySelectorAll('.media-card'),
        ...document.querySelectorAll('.life-block'),
        ...document.querySelectorAll('.contact-info-panel'),
        ...document.querySelectorAll('.contact-form-panel')
    ];

    elementsToReveal.forEach(el => el.classList.add('reveal-element'));

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        elementsToReveal.forEach(el => {
            // Skip hidden items
            if (el.classList.contains('hidden')) return;

            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                el.classList.add('revealed');
            }
        });
    };

    // Use IntersectionObserver if supported, fallback to scroll event
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        elementsToReveal.forEach(el => observer.observe(el));
    } else {
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check
    }

    // ==========================================================================
    // ACTIVE NAV NAVIGATION ON SCROLL
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveNavLink = () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Account for navbar height
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial check

    // ==========================================================================
    // CONTACT FORM SUBMISSION MOCK
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Visual loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending Message...';
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simulate server network latency
            setTimeout(() => {
                try {
                    // Log to console for debugging/demo
                    console.log('--- Form Submission ---');
                    console.log(`Name: ${name}`);
                    console.log(`Email: ${email}`);
                    console.log(`Subject: ${subject}`);
                    console.log(`Message: ${message}`);

                    // Success Feedback
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully.';
                    contactForm.reset();
                } catch (error) {
                    // Error Feedback
                    formStatus.className = 'form-status error';
                    formStatus.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Oops! Something went wrong. Please try again.';
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }
            }, 1200);
        });
    }
});
