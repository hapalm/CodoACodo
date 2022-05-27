
var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

var botonSubmit = document.querySelector('#boton-submit');
var mail = document.querySelector('#mail')
var botonReset = document.querySelector('#boton-reset')

botonSubmit.addEventListener('click',function(){
    if (!email.test(mail.value)) {
        document.querySelector('#mail').value = '';
    }
});

botonReset.addEventListener('click',function(){
    document.getElementById('formularioContacto').reset();
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
} 