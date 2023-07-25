/*Abre e fecha menu*/

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});


let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    var minPerSlide
    if (window.matchMedia("(max-width: 480px)").matches) {
        var minPerSlide = 2// number of slides per carousel-item
    }
    else if (window.matchMedia("(max-width: 1280px)").matches) {
        var minPerSlide = 3
    }
    else if (window.matchMedia("(min-width: 1280px)").matches) {
        var minPerSlide = 3
    }
    else {
        var minPerSlide = 5
    }

    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
