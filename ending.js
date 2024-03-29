document.addEventListener("DOMContentLoaded", function() {
  function fadeInOut(element, delay, duration) {
    setTimeout(function() {
      element.style.opacity = 1;
      setTimeout(function() {
        element.style.opacity = 0;
        setTimeout(function() {
          element.style.display = "none";
        }, 500);
      }, duration - 500);
    }, delay);
  }

  var loveForAmherst = document.getElementById("loveForAmherst"); // Updated ID
  fadeInOut(loveForAmherst, 1000, 8000);

  var invitationText = document.getElementById("invitationText");
  setTimeout(function() {
    invitationText.style.display = "block";
    fadeInOut(invitationText, 1000, 5000);
  }, 9000);

  var amherstText = document.getElementById("amherstText"); // Updated ID
  setTimeout(function() {
    amherstText.style.display = "block";
    fadeInOut(amherstText, 1000, 5000);
  }, 15000);

  var codedByText = document.getElementById("codedBy");
  setTimeout(function() {
    codedByText.style.display = "block";
    fadeInOut(codedByText, 1000, 90000);
  }, 23000);
});
