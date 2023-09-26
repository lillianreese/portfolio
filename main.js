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

//date and time function for contact page
function updateDate() {
    const dateElement = document.getElementById('dateDisplay');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    dateElement.textContent = formattedDate;
}

// Call the function to update the date when the page loads
updateDate();

// Set an interval to update the date every day (in milliseconds)
setInterval(updateDate, 86400000); // 86400000 milliseconds = 24 hours
