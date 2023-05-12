document.addEventListener("DOMContentLoaded", function () {

    const foto = document.querySelector("#foto");

    const fadeImagen = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('fade');
            } else {
                entry.target.classList.add('fade');
            }
        });
    }

    const observer = new IntersectionObserver(fadeImagen, {
        threshold: .85
    });

    observer.observe(foto);

});