var toTopBtn = document.getElementById("toTop");
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
var htmlVar = document.querySelector('html');
var bodyVar = document.querySelector('body');
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    }
    else {
        toTopBtn.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
btnHamburger.addEventListener('click', function () {
    console.log('works');
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
        })
        bodyVar.classList.remove('noscroll');
    }
    else {
        header.classList.add('open');
        fadeElems.forEach(function(element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in')
        })
        bodyVar.classList.add('noscroll');
    }
});
//BD
var bd = document.querySelector('#bdd');
// Set the date we're counting down to
var year = 2020;
var countDownDate = new Date("Jun 5, " + year + " 17:10:0").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    bd.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        bd.innerHTML = "EXPIRED";
    }
}, 1000);

