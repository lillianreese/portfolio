function main() {
  sendEmail();
  scrollToTop();
}

//when "Send me a message" button is clicked, email to LNReese4@gmail.com generates
function sendEmail() {
  window.location.href = "mailto:lnreese4@gmail.com";
}

//when "Back to top" button is clicked, webpage scrolls back to top of page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
