const scriptURL='https://script.google.com/macros/s/AKfycbyrnF-v9mgKQBuVQ4KInPE0ECi5YeNTeNyFH45ysVZy-ZLjYKlPHzB83oCiX6rLy2tUrg/exec'
const form=document.forms['contact-my-website']
const btnKirim=document.querySelector('.btn-kirim');const btnLoading=document.querySelector('.btn-loading');const btnDAlert=document.querySelector('.my-alert');form.addEventListener('submit',e=>{e.preventDefault()
btnLoading.classList.toggle("d-none");btnKirim.classList.toggle("d-none");fetch(scriptURL,{method:'POST',body:new FormData(form)}).then(response=>{btnLoading.classList.toggle("d-none");btnKirim.classList.toggle("d-none");btnDAlert.classList.toggle('d-none');form.reset()
console.log('Success!',response)}).catch(error=>console.error('Error!',error.message))})
$('.js-scroll-trigger').click(function(){$('.navbar-collapse').collapse('hide')});var checkbox=document.querySelector('input[name=theme]');checkbox.addEventListener('change',function(){if(this.checked){trans()
document.documentElement.setAttribute('data-theme','dark')}else{trans()
document.documentElement.setAttribute('data-theme','light')}})
let trans=()=>{document.documentElement.classList.add('transition');window.setTimeout(()=>{document.documentElement.classList.remove('transition')},1000)}
const navBar=document.getElementById("navbar");const navCont=document.getElementById("navCont");function scroll(){let calc=window.scrollY;if(calc>0){navBar.classList.replace("bg-transparent","bg-shadow");navCont.classList.replace("container-fluid","container")}else if(calc<=0){navBar.classList.replace("bg-dark","bg-transparent");navCont.classList.replace("container-fluid","container")}}
scroll();window.onscroll=()=>{scroll()}
