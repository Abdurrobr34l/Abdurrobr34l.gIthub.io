// HAMBURGER MENU AND ICON START 
const hamburgerIcon = document.querySelector('.header__hamburgermenu-icon .fa-bars-staggered');
const crossIcon = document.querySelector('.header__hamburgermenu-icon .fa-xmark');
const menu = document.querySelector('.hamburgermenu');
const body = document.body;
const menuLinks = document.querySelectorAll('.hamburgermenu__nav ul li a'); // Select all menu links
const hireMeButton = document.querySelector('.hamburgermenu__btn .btn'); // Select the "Hire Me" button

// Function to open the menu with transition
function openMenu() {
  menu.classList.remove('inactive'); // Ensure it's not in 'inactive' state
  menu.classList.add('active'); // Show the menu
  body.classList.add('no-scroll'); // Disable scrolling
  hamburgerIcon.style.display = 'none'; // Hide hamburger icon immediately
  crossIcon.style.display = 'block'; // Show cross icon immediately
}

// Function to close the menu with transition
function closeMenu() {
  menu.classList.remove('active'); // Remove the 'active' class
  menu.classList.add('inactive'); // Add 'inactive' to transition out
  crossIcon.style.display = 'none'; // Hide cross icon immediately
  hamburgerIcon.style.display = 'block'; // Show hamburger icon immediately

  setTimeout(() => {
    body.classList.remove('no-scroll'); // Enable scrolling after transition
  }, 600); // Match the transition duration (0.6s)
}

// Add event listeners to toggle menu and icons
hamburgerIcon.addEventListener('click', openMenu);
crossIcon.addEventListener('click', closeMenu);

// Close the menu when any menu link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close the menu when the "Hire Me" button is clicked
hireMeButton.addEventListener('click', closeMenu);

// HAMBURGER MENU AND ICON END