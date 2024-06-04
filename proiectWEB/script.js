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

const cards=document.querySelector('.cardsInfo')
fetch('./cards.html')
.then(res=>res.text())
.then(data=>{
    cards.innerHTML=data
});//static
function openDoctorPage(doctorName) {
    window.location.href = './contactUs.html?doctor=' + encodeURIComponent(doctorName);
}