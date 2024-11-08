const mobilenav = document.querySelector('.mobile-navbar-btn');
const navheader = document.querySelector('.header')

const toggleNavbar = () => {
    navheader.classList.toggle('active')
}

mobilenav.addEventListener('click', () =>  toggleNavbar())

// Start of slides
const images = document.querySelectorAll('.slides');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active'); // Hide current image
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image
  images[currentIndex].classList.add('active'); // Show next image
}

// Show the first image by default
images[currentIndex].classList.add('active');

// Set the carousel to change images every 3 seconds
setInterval(showNextImage, 3000);

// End of slides


// Tabs js

const tabButtons = document.querySelectorAll('.class-link');
const contents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.getAttribute('data-tab')).classList.add('active')
    })
})

if(tabButtons.length > 0 && contents.length > 0){
    tabButtons[0].classList.add('active');
    contents[0].classList.add('active')
}

// End of tab js

// filter selection
filterSelection('all');

function filterSelection(category){
    const elements = document.querySelectorAll('.filterDiv');
    elements.forEach(element => {
        element.classList.remove('show');
        if(category == 'all' || element.classList.contains(category)){
            element.classList.add('show');
        }
    })
}

const btnContainer = document.getElementById('myBtnContainer')
const btns = btnContainer.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function (){
        const current = btnContainer.querySelector('.active');
        current.classList.remove('active');
        this.classList.add('active')
    })
})
// end of portfolio

// start of footer

// Function to update the current year
function updateYear() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', updateYear);

// end of footer
