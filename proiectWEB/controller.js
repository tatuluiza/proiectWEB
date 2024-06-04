document.addEventListener("DOMContentLoaded", function() {
    console.log("orivcr");
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Work with the JSON data here
        console.log(data);
  
        // Example: Loop through students
        
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  });