const body = document.body;
function openNav() {

  document.getElementById("mySidebar").style.width = "250px";
  const body = document.querySelector('body');
  body.style.overflow = "hidden";

}
function scrollToDiv() {
  var div = document.getElementById('myDiv');
  div.scrollIntoView({ behavior: 'smooth' });
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("pageContent").style.marginLeft = "0";
  overlay.style.display = "none";
  pageContent.style.filter = "blur(0px)";
  setTimeout(function () {
    body.style.overflowY = 'overlay';
  }, 300);
}

const overlay = document.getElementById("overlay");
const menuButton = document.getElementById("menuButton");
const pageContent = document.getElementById("pageContent");
const pop = document.getElementById("pop");


menuButton.addEventListener("click", function () {

  pageContent.style.filter = "blur(5px)";
  body.style.overflowY = 'hidden';
  overlay.style.display = "block";
  //document.getElementById("mySidebar").style.width = "250px";
  if (window.matchMedia("(max-width: 500px)").matches) {
    // Set the width of the sidebar to 250px if the viewport is wider than 768px
    document.getElementById("mySidebar").style.width = "100%";
  } else {
    // Otherwise, set the width of the sidebar to 0
    document.getElementById("mySidebar").style.width = "473px";
  }

});
pop.addEventListener("click", function () {
  body.style.overflowY = 'overlay';
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("pageContent").style.marginLeft = "0";
  overlay.style.display = "none";
  pageContent.style.filter = "blur(0px)";
})


// hoverBtn8.addEventListener("mouseout", function() {
//   hideDiv8.style.display = "block";
//   showDiv8.style.display = "none";
// });
//////////////////////////
const hoverBtn9 = document.getElementById("hoverBtn9");
const hideDiv9 = document.getElementById("hideDiv9");
const showDiv9 = document.getElementById("showDiv9");
hoverBtn9.addEventListener("mouseover", function () {
  hideDiv9.style.display = "none";
  showDiv9.style.display = "block";
});

hoverBtn9.addEventListener("mouseout", function () {
  hideDiv9.style.display = "block";
  showDiv9.style.display = "none";
});
//////////
const sendgridApiKey = "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";
const dropdown = document.getElementById('my-dropdown');
const dropdownMenu = dropdown.nextElementSibling;
const defaultText = dropdown.textContent;

dropdownMenu.addEventListener('click', function (event) {
  const selectedOption = event.target.textContent;
  dropdown.textContent = selectedOption !== defaultText ? selectedOption : defaultText;
  dropdown.click();
});
$('.custom-dropdown-menu a.dropdown-item').click(function () {
  $('.custom-dropdown-menu a.dropdown-item.active').removeClass('active');
  $(this).addClass('active');
  $('.custom-dropdown-toggle').html($(this).html());
});
///////////////////////////////////////////////////////////////
function validateForm() {
  // Get the form element
  var form = document.forms["myForm"];


  // Get the input fields
  var nameField = form["name"];
  var phoneField = form["phone"];
  var emailField = form["email"];
  var recaptchaField = form["g-recaptcha-response"];

  // Get the error message elements
  var nameError = document.getElementById("name-error");
  var phoneError = document.getElementById("phone-error");
  var emailError = document.getElementById("email-error");
  var recaptchaError = document.getElementById("recaptcha-error");

  // Validate name field
  if (nameField.value.trim() == "") {
    nameError.textContent = "Name must be filled out";
    nameError.classList.remove("error-message");
    nameError.classList.add("error-message-visible");
    return false;
  } else {
    nameError.classList.remove("error-message-visible");
    nameError.classList.add("error-message");
  }

  // Validate phone field
  if (phoneField.value.trim() == "") {
    phoneError.textContent = "Phone number must be filled out";
    phoneError.classList.add("error-message-visible");
    return false;
  } else if (!/^\d{10}$/.test(phoneField.value.trim())) {
    phoneError.textContent = "Phone number is invalid. Please enter a 10-digit number without spaces or dashes.";
    phoneError.classList.add("error-message-visible");
    return false;
  } else {
    phoneError.classList.remove("error-message-visible");
  }

  // Validate email field
  if (emailField.value.trim() == "") {
    emailError.textContent = "Email address must be filled out";
    emailError.classList.add("error-message-visible");
    return false;
  } else if (!/\S+@\S+\.\S+/.test(emailField.value.trim())) {
    emailError.textContent = "Email address is invalid. Please enter a valid email address.";
    emailError.classList.add("error-message-visible");
    return false;
  } else {
    emailError.classList.remove("error-message-visible");
  }

  // Validate recaptcha
  if (recaptchaField.value.trim() == "") {
    recaptchaError.textContent = "Please complete the reCAPTCHA validation";
    recaptchaError.classList.add("error-message-visible");
    return false;
  } else {
    recaptchaError.classList.remove("error-message-visible");
  }

  // const subject = `New message`;
  // const body = `Name: ${nameField.value}\n Phone:  ${phoneField.value}\nEmail: ${emailField.value}\nMessage: ${dropdown.textContent}`;
  sendEmail();
}


function sendEmail() {

  const emailContent = {
    to: "velmurugan@greypathsolutions.com",
    from: "deepak@greypathsolutions.com",
    subject: "hello",
    text: "hello"
  };

  fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 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'
    },
    body: JSON.stringify(emailContent)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Email sent successfully:', data);
      alert('Email sent successfully!');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    });
}