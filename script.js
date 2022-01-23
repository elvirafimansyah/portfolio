/*==================== FORM FUNCITON ====================*/ 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnF-v9mgKQBuVQ4KInPE0ECi5YeNTeNyFH45ysVZy-ZLjYKlPHzB83oCiX6rLy2tUrg/exec'
const form = document.forms['contact-my-website']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const btnDAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
e.preventDefault()
// ketika tombol submit di klik 
// tampilkan tombol loading , hilangkan tombol kirim
btnLoading.classList.toggle("d-none");
btnKirim.classList.toggle("d-none");
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // tampilkan tombol kirim , hilangkan tombol loading
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    // tampilkan alert
    btnDAlert.classList.toggle('d-none');
    // reset tulisan input form nya
    form.reset()
    console.log('Success!', response)})
  .catch(error => console.error('Error!', error.message))
})
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

/*==================== DARK LIGHT THEME ====================*/ 
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

/*==================== NAVBAR SHADOW ====================*/ 
// panggil navbar
// const navBar = document.getElementById("navbar");
// const navCont = document.getElementById("navCont");
// function scroll() {
//   let calc = window.scrollY; // mendapatkan posisi scroll dari atas ke bawah
//   if (calc > 0) { // jika posisi scroll lebih dari 0 pixel
//     navBar.classList.replace("bg-transparent", "bg-shadow"); // ganti background navbar
//     navCont.classList.replace("container-fluid", "container"); // ubah margin pada navbar
//   } else if (calc <= 0) { // jika posisi scroll sama dengan 0 pixel
//     navBar.classList.replace("bg-dark", "bg-transparent");
//     navCont.classList.replace("container-fluid", "container");
//   } 
// }
//panggil saat inisialisasi
// scroll();
// panggil saat discroll
// window.onscroll = () => { // jika tidak work untuk arrow function, coba pakai function biasa
//   scroll();
// };

document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");

  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/*==================== TYPED EFFECT  ====================*/ 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "UI/UX Designer", "Student"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 3000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
  }
}

function erase() {
    if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



// ========================= Click Effect Sounds =========================
const all_button = document.querySelectorAll('.btn');

let i = 0;

for(i; i < all_button.length; i++) {
  all_button[i].addEventListener('click', () => {
    const sound = new Audio('sounds/click.wav');
    sound.play();
  });  
};

// ========================= Keyboard Mechanical Sounds ========================= //
window.addEventListener('keydown', keyboardSounds, false);

function sounds_type() {
  const sounds = new Audio('sounds/keyboard.mp3');
  sounds.play();
}


function keyboardSounds(key) {
  if(key.keyCode == "33" || key.keyCode == "38" || key.keyCode == "34" || key.keyCode == "40") {
    sounds_type();
  }; 
}




// ========================= Smooth Scroll Jquery ========================= //  
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
