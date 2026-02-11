document.addEventListener('DOMContentLoaded', () => {
    
    // SÉLECTEURS
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector("header");

    // GESTION MENU BURGER (MOBILE)
    if (hamburger) {
        // Ouvrir / Fermer au clic sur l'icône
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Fermer le menu si on clique sur un lien (UX)
        document.querySelectorAll(".nav-links li a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    // EFFET OMBRE AU DÉFILEMENT (SCROLL)
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

});