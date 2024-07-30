document.querySelectorAll("aside a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        document.querySelectorAll("aside a").forEach((x) => {
            x.classList.remove("active");
        });

        e.target.classList.add("active");

        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight; // wysokość nagłówka
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset ;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

document.querySelectorAll(".nav-container a").forEach((anchor2) => {
    anchor2.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        document.querySelectorAll(".nav-container a").forEach((x) => {
            x.classList.remove("active");
        });

        e.target.classList.add("active");

        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight; // wysokość nagłówka
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

document.getElementById("menu-button").addEventListener("click", function (e) {
    document.querySelector(".nav-container").classList.toggle("menu-bar");
});

document.querySelector("main").addEventListener("click", function (e) {
    if (document.querySelector(".nav-container").classList.contains("menu-bar")) {
        document.querySelector(".nav-container").classList.remove("menu-bar");
    }
});
