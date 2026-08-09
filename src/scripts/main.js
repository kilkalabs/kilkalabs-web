// KilkaLabs Website - Main JavaScript

// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileDropdownButton = document.getElementById('mobile-dropdown-button');
const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
const desktopDropdownButton = document.getElementById('desktop-dropdown-button');
const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');
const copyrightYear = document.getElementById('copyright-year');

// Set copyright year
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        const isShown = mobileMenu.classList.toggle('show');
        mobileMenuButton.setAttribute('aria-expanded', isShown);
    });
}

// Mobile dropdown toggle
if (mobileDropdownButton && mobileDropdownMenu) {
    mobileDropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isShown = mobileDropdownMenu.classList.toggle('show');
        mobileDropdownButton.setAttribute('aria-expanded', isShown);
    });
}

// Desktop dropdown functionality
if (desktopDropdownButton && desktopDropdownMenu) {
    let desktopDropdownTimeout;

    desktopDropdownButton.addEventListener('mouseenter', () => {
        clearTimeout(desktopDropdownTimeout);
        desktopDropdownMenu.classList.add('show');
        desktopDropdownButton.setAttribute('aria-expanded', 'true');
    });

    desktopDropdownButton.addEventListener('mouseleave', () => {
        desktopDropdownTimeout = setTimeout(() => {
            desktopDropdownMenu.classList.remove('show');
            desktopDropdownButton.setAttribute('aria-expanded', 'false');
        }, 100);
    });

    desktopDropdownMenu.addEventListener('mouseenter', () => {
        clearTimeout(desktopDropdownTimeout);
    });

    desktopDropdownMenu.addEventListener('mouseleave', () => {
        desktopDropdownMenu.classList.remove('show');
        desktopDropdownButton.setAttribute('aria-expanded', 'false');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenuButton) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove('show');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    }
    if (desktopDropdownButton && desktopDropdownMenu) {
        if (!desktopDropdownButton.contains(e.target) && !desktopDropdownMenu.contains(e.target)) {
            desktopDropdownMenu.classList.remove('show');
            desktopDropdownButton.setAttribute('aria-expanded', 'false');
        }
    }
});
