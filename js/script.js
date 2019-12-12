let yPosition = window.pageYOffset;
//alert(yPosition)
let toggler = document.querySelector("#toggler2")

let closex = document.querySelector(".close-x")
let popup = document.querySelector(".popup")
let popupbackground = document.querySelector(".popup-background")

closex.addEventListener("click", () => {
    //popup.style.display="none"
    //poupbackground.style.display="one"
    //closex.style.display="none"
    popup.classList.add("invisible")
    popupbackground.classList.add("invisible")
    popup.classList.remove("visible")
    popupbackground.classList.remove("visible")
})
//al clickear toggler mostrar popup
toggler.addEventListener("click", () => {
    //popup.style.display="block important!"
    //popupbackground.style.display="block important"
    //closex.style.display="block important"
    popup.classList.add("visible")
    popupbackground.classList.add("visible")
    popup.classList.remove("invisible")
    popupbackground.classList.remove("invisible")

})

toggler2.addEventListener("click", () => {
    //popup.style.display="block important!"
    //popupbackground.style.display="block important"
    //closex.style.display="block important"
    popup.classList.add("visible")
    popupbackground.classList.add("visible")
    popup.classList.remove("invisible")
    popupbackground.classList.remove("invisible")

})



// Referencia: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

function opacityUp(t) {

}

function doSomething(scroll_pos) {
    if (last_known_scroll_position >= 60) {
        toggler.classList.remove("fade")

    } else if (last_known_scroll_position < 60) {
        toggler.classList.add("fade")

    }



}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;

});

let navlinks = document.querySelectorAll(".nav-item")
//console.log(navlinks)
for (link in navlinks) {
    //console.log(link)   
    navlinks[link].addEventListener("click", (e) => {
        //console.log("hola")
        navlinks[link].classList.add("active")
    })
    console.log(navlinks[link])
}

//animación para abrir nav

body.addEventListener("click", () => {
    openNav()
})
let openNav = () => {
    document.querySelector(".navbar").style.height = "100px"
}