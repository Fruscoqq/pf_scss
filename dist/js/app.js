window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    document.querySelector("nav").style.backgroundColor = "#3c164d";
    document.querySelector("nav").style.borderBottom = "solid 3px #752243"
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
    document.querySelector("nav").style.border = "none"
  }
}


// Mobile Navbar

let mainNav = document.querySelector('#js-menu'),
  navBarToggle = document.querySelector('#js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
})