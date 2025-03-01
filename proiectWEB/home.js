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
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.fade-in');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}