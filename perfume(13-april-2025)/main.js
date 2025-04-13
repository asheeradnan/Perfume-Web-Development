//Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Toggle mobile menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Toggle dropdowns on mobile
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // For mobile devices only
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const navLink = dropdown.querySelector('.nav-link');
            
            navLink.addEventListener('click', (e) => {
                // Prevent default action when clicking on dropdown toggle
                if(window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close all other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                }
            });
        });
    }
    
    // Update dropdown behavior when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// perfume showcase menu
var swiper = new Swiper(".perfumeSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    }
});

// Night Mode Toggle
const nightModeToggle = document.querySelector('#night-mode-toggle');
const body = document.body;

// Check for saved preference in local storage
if (localStorage.getItem('nightMode') === 'enabled') {
    enableNightMode();
}

// Toggle night mode on click
nightModeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (body.classList.contains('night-mode')) {
        disableNightMode();
    } else {
        enableNightMode();
    }
});

// Functions to enable and disable night mode
function enableNightMode() {
    body.classList.add('night-mode');
    nightModeToggle.querySelector('i').classList.remove('bx-moon');
    nightModeToggle.querySelector('i').classList.add('bx-sun');
    localStorage.setItem('nightMode', 'enabled');
}

function disableNightMode() {
    body.classList.remove('night-mode');
    nightModeToggle.querySelector('i').classList.remove('bx-sun');
    nightModeToggle.querySelector('i').classList.add('bx-moon');
    localStorage.setItem('nightMode', 'disabled');
}