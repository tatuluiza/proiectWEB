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
 
    
function saveFormData() {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the JSON response data here
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
