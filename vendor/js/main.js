const navbar = document.querySelector(".navbar");
const titleSpan = document.querySelector(".title span");
const loading = document.querySelector(".loading");
const goToTop = document.querySelector(".go-to-top");
const aboutSection = document.querySelector(".about");
const navLinks = document.querySelectorAll(".nav-link");
console.log(titleSpan.offsetTop);
window.addEventListener("scroll", function () {
    if (window.scrollY > titleSpan.offsetTop) {
        navbar.style.backgroundColor = '#fff'
    }
    else {
        navbar.style.backgroundColor = 'transparent'

    }
    if (window.scrollY > aboutSection.offsetTop) {
        goToTop.classList.remove('opacity-0', 'invisible')
    }
    else {
        goToTop.classList.add('opacity-0', 'invisible')
    }
})
window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add('opacity-0', 'invisible')
        document.body.style.overflow = 'auto'
    }, 2000)
})
goToTop.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})
for (let i = 0; i <navLinks.length; i++) {
navLinks[i].addEventListener('click',function(e){

    for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('active')
    }
    navLinks[i].classList.add('active')
})
}