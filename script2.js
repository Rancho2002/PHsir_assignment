window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("primyBtn").style.display = "block";
  } else {
    document.getElementById("primyBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 //$('#div_body').animate({ scrollTop: 0 }, 2000);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}