


const activepage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navLinks.length; i++) {
    let link = navLinks[i];
    if (link.href.includes(`${activepage}`)) {
        link.classList.add('active');
    }
}
