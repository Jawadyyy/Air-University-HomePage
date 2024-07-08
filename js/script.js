/*JavaScribt for the Navbar to stick to the topr*/
window.addEventListener('scroll', function () {
  var nav2 = document.getElementById('nav2');
  var nav1Height = document.getElementById('nav1').offsetHeight;
  if (window.scrollY > nav1Height) {
    nav2.classList.add('sticky');
  } else {
    nav2.classList.remove('sticky');
  }
});

/*JavaScript for the back to top button in right bottom corner*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}