// Mobile Menu Nav bar
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function moveToSection(id) {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView();
}

// PICTURE CAROUSEL
var bool = true;
var slideIndex = 1;

showSlides1(slideIndex);

// // Next/previous controls
function plusSlides(n) {
  bool = false;
  showSlides1(slideIndex += n);
}

// // Dot image controls
function currentSlide(n) {
  bool = false;
  showSlides1(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
    
  if(bool === true) {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    setTimeout(showSlides1, 3000);
  }
}
// PICTURE CAROUSEL

//Hobbies
const cards = document.querySelectorAll('.collapse');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('show');
      }
    });
  });
});
//Hobbies

//Contact 
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', function() {


  function validateForm() {
    // Get the phone number input value
    const phoneNumberInput = document.getElementById('phoneNumber').value;
  
    // Check if it's a number and has less than 10 digits
    if (!/^\d+$/.test(phoneNumberInput) || phoneNumberInput.length >= 10) {
      // Display an error message or handle the validation failure
      console.error('Invalid phone number. It should be a number and less than 10 digits.');
      // You might display an error message to the user or prevent form submission
      return; // Exit the function if validation fails
    }
  
    // Proceed with form submission or other actions
    console.log('Valid phone number:', phoneNumberInput);
    // You can submit the form here or perform other actions
    // Submit the form data to the Google Sheet
    // Get the form data
    const formData = new FormData(this.form);

    fetch('https://script.google.com/macros/s/17bBEU78N4xNKv_8rVbO4ws8FhpiHpt-1kaxijF8P1CI/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the Google Sheet
      if (data.status == 'success') {
        window.location.href = 'https://example.com/'; 
      } else {
        // Handle other conditions if needed
      }
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);

      // Redirect to a 404 error page
      window.location.href = '/404.html'; // Replace with the path to your custom 404 error page
    });
  }

  
});

