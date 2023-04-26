
document.addEventListener("DOMContentLoaded", function() {
  // Show the Contact Us form after 2 minutes
  setTimeout(function() {
    document.getElementById("contact-us-popup").style.display = "block";
  }, 20*60*1000); // Change this value to the desired time interval (e.g., 2 * 60 * 1000 for 2 minutes)

  // Close the Contact Us form when the Close button is clicked
  document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("contact-us-popup").style.display = "none";
  });
});
