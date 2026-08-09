// KilkaLabs Website - Main JavaScript

// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileDropdownButton = document.getElementById('mobile-dropdown-button');
const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
const desktopDropdownButton = document.getElementById('desktop-dropdown-button');
const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');
const copyrightYear = document.getElementById('copyright-year');

const closeMobileMenu = () => {
    mobileMenu?.classList.remove('show');
    mobileMenuButton?.setAttribute('aria-expanded', 'false');
    mobileDropdownMenu?.classList.remove('show');
    mobileDropdownButton?.setAttribute('aria-expanded', 'false');
};

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

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });

    mobileMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
            mobileMenuButton.focus();
        }
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
    const desktopDropdown = desktopDropdownButton.parentElement;

    const showDesktopDropdown = () => {
        clearTimeout(desktopDropdownTimeout);
        desktopDropdownMenu.classList.add('show');
        desktopDropdownButton.setAttribute('aria-expanded', 'true');
    };

    const hideDesktopDropdown = () => {
        clearTimeout(desktopDropdownTimeout);
        desktopDropdownMenu.classList.remove('show');
        desktopDropdownButton.setAttribute('aria-expanded', 'false');
    };

    desktopDropdownButton.addEventListener('mouseenter', () => {
        showDesktopDropdown();
    });

    desktopDropdownButton.addEventListener('mouseleave', () => {
        desktopDropdownTimeout = setTimeout(() => {
            hideDesktopDropdown();
        }, 100);
    });

    desktopDropdownMenu.addEventListener('mouseenter', () => {
        showDesktopDropdown();
    });

    desktopDropdownMenu.addEventListener('mouseleave', () => {
        hideDesktopDropdown();
    });

    desktopDropdownButton.addEventListener('focus', showDesktopDropdown);

    desktopDropdown?.addEventListener('focusout', (e) => {
        if (!desktopDropdown.contains(e.relatedTarget)) {
            hideDesktopDropdown();
        }
    });

    desktopDropdownButton.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            showDesktopDropdown();
            desktopDropdownMenu.querySelector('a')?.focus();
        }

        if (e.key === 'Escape') {
            hideDesktopDropdown();
            desktopDropdownButton.blur();
        }
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenuButton) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            closeMobileMenu();
        }
    }
    if (desktopDropdownButton && desktopDropdownMenu) {
        if (!desktopDropdownButton.contains(e.target) && !desktopDropdownMenu.contains(e.target)) {
            desktopDropdownMenu.classList.remove('show');
            desktopDropdownButton.setAttribute('aria-expanded', 'false');
        }
    }
});
