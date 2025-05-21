document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active'); // Toggles the hamburger animation
            // Toggle aria-expanded for accessibility
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close nav menu when a link is clicked (for single-page navigation or general click)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Optional: Add smooth scrolling for internal links (e.g., #about, #contact)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Check if it's an internal link on the *same* page
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // If target element exists and we are on index.html, scroll to it
            if (targetElement && window.location.pathname.endsWith('index.html')) {
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (targetElement) {
                // If not on index.html, navigate to index.html with the hash
                window.location.href = 'index.html' + this.getAttribute('href');
            }
            // If targetElement doesn't exist, it's likely a non-existent hash or for future content,
            // so we'll let default behavior for now if no specific action needed.
        });
    });
});
