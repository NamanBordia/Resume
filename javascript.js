document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector(".navbar");

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            nav.style.backgroundColor = "#000000"; // Change this to your desired color
        } else {
            nav.style.backgroundColor = 'transparent'; // Change this to your default color
        }
    }

    // Event listener for scroll event
    window.addEventListener("scroll", scrollFunction);
});



