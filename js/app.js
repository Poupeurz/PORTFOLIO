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

document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const carousels = document.querySelectorAll('.carousel');
    let currentCarousel, currentCarouselImages, currentIndex;
// Phong Al Kafir was here
    function openCarousel(carouselId) {
        currentCarousel = document.getElementById(carouselId);
        currentCarouselImages = currentCarousel.querySelectorAll('.carousel-image');
        currentIndex = 0;
        updateCarousel();
        currentCarousel.style.display = 'flex';
    }

    function closeCarousel() {
        if (currentCarousel) {
            currentCarousel.style.display = 'none';
        }
    }

    function showPrevImage() {
        if (currentCarousel) {
            currentIndex = (currentIndex === 0) ? currentCarouselImages.length - 1 : currentIndex - 1;
            updateCarousel();
        }
    }

    function showNextImage() {
        if (currentCarousel) {
            currentIndex = (currentIndex === currentCarouselImages.length - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        }
    }

    function updateCarousel() {
        if (currentCarousel) {
            currentCarouselImages.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
        }
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', () => openCarousel(image.dataset.carousel));
    });

    carousels.forEach(carousel => {
        carousel.querySelector('.close').addEventListener('click', closeCarousel);
        carousel.querySelector('.prev').addEventListener('click', showPrevImage);
        carousel.querySelector('.next').addEventListener('click', showNextImage);
    });

    document.addEventListener('keydown', (e) => {
        if (currentCarousel && currentCarousel.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'Escape') {
                closeCarousel();
            }
        }
    });
});
