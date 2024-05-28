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

    var modal = document.getElementById("myModal");

    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
}

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
}
    
});
