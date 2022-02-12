<script>
    import {sidebarCollapsed} from "../../../stores";
    import { onMount } from 'svelte';
    onMount(() => {
        console.log('SideNav Mounted');
        const nav_links = document.querySelectorAll(".sidenav__link");
        const sub_links = document.querySelectorAll(".sidenav__submenu-link")
        console.log("Howdy: " + nav_links);

        nav_links.forEach((link) => {
            link.addEventListener('click', function () {
                console.log("Clicked: " + this.id)
                nav_links.forEach((l) => {
                    if (l.classList.contains("sidenav__link--active")) {
                        console.log("Active Link: "+ l?.id)
                        l.classList.remove("sidenav__link--active");

                        const sub_menu = l.nextElementSibling;
                        console.log("Submenu?" + sub_menu?.id)
                        if (sub_menu) {
                            // Is there a JS way to handle BEM?
                            sub_menu.classList.add("sidenav__submenu--none");
                        }

                    }

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
                    console.log("Sublink Clicked: " + link);

                    if (l.classList.contains("sidenav__submenu-link--active"))
                        l.classList.remove("sidenav__submenu-link--active");
                });

                this.classList.toggle("sidenav__submenu-link--active");
            });
        });

    });
    //const nav_links = document.querySelectorAll(".sidenav__link");

/*
    let sidebarCollapsedValue;
    sidebarCollapsed.subscribe(value => {sidebarCollapsedValue = value});
*/
  //  const header = document.getElementById("header");
/*

    const nav_toggle_btn = document.getElementById("nav-toggle-btn");
    const nav = document.getElementById("sidenav");
    const nav_links = document.querySelectorAll(".sidenav__link");
    const sub_links = document.querySelectorAll(".sidenav__submenu-link");*/
/*
    nav_toggle_btn.addEventListener('click', function() {
        this.classList.toggle('fa-times');
        nav.classList.toggle('collapse');
        header.classList.toggle('collapse-header');

    });*/

  /*  nav_links.forEach((link) => {
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

*/

</script>
<!--
<div class="portal-side-nav">
    {#if (!$sidebarCollapsed)}
        <img alt="nav-logo" src="https://via.placeholder.com/240x85.png?text=nav-logo" />
    {/if}
    <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        <li>Menu Item 4</li>
        <li>Menu Item 5</li>
        <li>
        <ul>
            <li>Sub Menu Item 1</li>
            <li>Sub Menu Item 2</li>
            <li>Sub Menu Item 3</li>

        </ul>
        </li>
    </ul>
</div>
-->



    {#if (!$sidebarCollapsed)}
        <img alt="nav-logo" src="https://via.placeholder.com/240x85.png?text=nav-logo" />
<!--
        <div class="logo">
            <i class="fab fa-gg-circle"></i>
            <span>Skyline Sidebar</span>
        </div>
-->

    {/if}
    <ul class="sidenav-menu">
        <li class="sidenav__item">
            <a href="#" class="sidenav__link" id="menu-item1"><i class="fas fa-home"></i>
                <span>Menu Item 1</span>
            </a>
        </li>
        <li class="sidenav__item">
            <a href="#" class="sidenav__link" id="menu-item2"><i class="far fa-address-card"></i>
                <span>Menu Item 2 <i class="fas fa-angle-down"></i></span>
            </a>
            <ul class="sidenav__submenu--none">
                <li><a href="#" class="sidenav__submenu-link" id="submenu-item1">Sub Menu Item 1</a></li>
                <li><a href="#" class="sidenav__submenu-link" id="submenu-item2">Sub Menu Item 2</a></li>
                <li><a href="#" class="sidenav__submenu-link" id="submenu-item3">Sub Menu Item 3</a></li>
            </ul>
        </li>
        <li class="sidenav__item">
            <a href="#" class="sidenav__link" id="menu-item3"><i class="fab fa-app-store"></i>
                <span>Menu Item 3</span>
            </a>
        </li>
        <li class="sidenav__item">
            <a href="#" class="sidenav__link" id="menu-item4"><i class="far fa-keyboard"></i>
                <span>Menu Item 4</span>
            </a>
        </li>
    </ul>
