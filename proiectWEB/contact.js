function submitForm()
{    event.preventDefault();
    var nameInput = document.querySelector('input[name="contact[name]"]').value;
    var emailInput = document.querySelector('input[name="contact[email]"]').value;
    var messageInput = document.querySelector('textarea[name="contact[message]"]').value;

    if (nameInput.trim() === '' || emailInput.trim() === '' || messageInput.trim() === '') {
      alert("Please fill in all fields.");
    } else if (messageInput.trim().length < 15) {
      alert("Message should be at least 15 characters long.");
    } else {
      alert("Message was delivered");
    }

}
function generateFooter() {
  const footerContent = `
  <footer class="footer mt-auto py-3">
  <div class="socialIcons d-flex justify-content-end">
     <a href="https://www.tiktok.com/@careskincare" target="_blank"> <img src="assets/tiktok.png" alt=""></a>
     <a href="https://www.facebook.com/careskincare1" target="_blank"> <img src="assets/fb.png" alt=""></a>
     <a href="https://www.instagram.com/careskincare/" target="_blank"><img src="assets/insta.png" alt=""></a>
  </div>
</footer>

  `;
  return footerContent;
}//dinamic
document.getElementById("footer").innerHTML = generateFooter();

function getDoctorNameFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const doctorName = urlParams.get('doctor');
  return doctorName;
}

// Function to set the doctor's name in the card title
function setDoctorName() {
  const doctorName = getDoctorNameFromUrl();
  const cardTitle = document.getElementById('doctorName');
  cardTitle.textContent = `Need help? Send a message to ${doctorName}`;
}

// Call the setDoctorName function when the page loads
window.onload = setDoctorName;