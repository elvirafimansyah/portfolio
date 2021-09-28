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
