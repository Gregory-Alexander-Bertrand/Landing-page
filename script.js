const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

//The function below is to close the navbar when the user clicks anywhere outside the bar
function closeNavbar(e) {
    if (
        document.body.classList.contains('show-nav') &&
        e.target !== toggle &&
        e.target.contains(e.target) &&
        e.target !== navbar &&
        !navbar.contains(e.target)
    ) {
        document.body.classList.toggle('show-nav');
        document.body.removeEventListener('click', closeNavbar);
    } else if (!document.body.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNavbar);
    }
}

//This toggles the nav bar
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    document.body.addEventListener('click', closeNavbar);
});
