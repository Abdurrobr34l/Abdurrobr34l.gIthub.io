// GO-TO-TOP BUTTON START
window.onscroll = function () {
  var button = document.getElementById('goToTop');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = 'block'; // Show button
  } else {
    button.style.display = 'none'; // Hide button
  }
};
// GO-TO-TOP BUTTON END  --------- 

// HAMBURGER MENU AND ICON START  ---------
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

// HAMBURGER MENU AND ICON END  ---------

// TYPEWRITER EFFECT FOR ABOUT ME SECTION START ---------
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// TYPEWRITER EFFECT FOR ABOUT ME SECTION END ---------

// PROJECT FILTER START ---------
$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).attr('data-filter');

    if (value === 'all') {
      // Show all items when 'all' is selected
      $('.itemBox').show(1000);
    } else {
      // Hide items that do not match the filter and show those that match
      $('.itemBox').not('.' + value).hide(1000);
      $('.itemBox').filter('.' + value).show(1000);
    }

    // Add active class to selected filter button
    $(this).addClass('active').siblings().removeClass('active');
  });
});
// PROJECT FILTER END ---------

// CONTACT ME FORM START ---------
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Replace 'YOUR_TEMPLATE_ID' with your actual Template ID
  emailjs.sendForm('service_hyp2xhf', 'template_m0p26et', this)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById("status").innerText = "Message sent successfully!";
      }, function(error) {
          console.log('FAILED...', error);
          document.getElementById("status").innerText = "Failed to send message. Please try again.";
      });

  // Clear the form fields after submission
  this.reset();
});
// CONTACT ME FORM END ---------


// FOOTER START ---------
// made the copywrite year dynamic as year changes its no. also changes
document.getElementById("year").textContent = new Date().getFullYear(); F
// FOOFTER END ---------