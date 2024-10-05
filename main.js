var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-moving").style.top = "0";
  } else {
    document.getElementById("navbar-moving").style.top = `-${document.getElementById("navbar-moving").scrollHeight}px`;
  }
  prevScrollpos = currentScrollPos;
};