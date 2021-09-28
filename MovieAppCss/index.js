const navbar = document.querySelector('header');
const sticky = navbar.offsetTop;

function myFunction() {

    if (window.pageYOffset >= sticky) {
        
        navbar.classList.remove("transparent");

    } else {

        navbar.classList.add("transparent");
    }
}

myFunction();