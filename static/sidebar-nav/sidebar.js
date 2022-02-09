const header = document.getElementById("header");
const nav_toggle_btn = document.getElementById("nav-toggle-btn");
const nav = document.getElementById("sidenav");
const nav_links = document.querySelectorAll(".sidenav__link");
const sub_links = document.querySelectorAll(".sidenav__submenu-link");

nav_toggle_btn.addEventListener('click', function() {
    this.classList.toggle('fa-times');
    nav.classList.toggle('collapse');
    header.classList.toggle('collapse-header');

});

nav_links.forEach((link) => {
    link.addEventListener('click', function () {
        nav_links.forEach((l) => {
            if (l.classList.contains("sidenav__link--active"))
                l.classList.remove("sidenav__link--active");
        });

        this.classList.toggle("sidenav__link--active");
        const sub_menu = this.nextElementSibling;
        if (sub_menu) {
            // Is there a JS way to handle BEM?
            sub_menu.classList.toggle("sidenav__submenu--none");
        }
    });
});

sub_links.forEach((link) => {
    link.addEventListener('click', function () {
        sub_links.forEach((l) => {
            if (l.classList.contains("sidenav__submenu-link--active"))
                l.classList.remove("sidenav__submenu-link--active");
        });

        this.classList.toggle("sidenav__submenu-link--active");
    });
});

