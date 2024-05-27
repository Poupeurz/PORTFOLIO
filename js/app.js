document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header-menu-mobile");
    const menuIcon = menuButton.querySelector(".menu-icon");
    const menu = document.querySelector(".header-menu");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("open");

        if (menu.classList.contains("open")) {
            menuIcon.textContent = "close";
        } else {
            menuIcon.textContent = "menu";
        }
    });

    const mobileMenuLinks = document.querySelectorAll(".header-menu a");
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            menu.classList.remove("open");
            menuIcon.textContent = "menu";

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });

            event.preventDefault();
        });
    });
});
