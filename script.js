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
