let yPosition = window.pageYOffset;
//alert(yPosition)
let toggler = document.querySelector("#toggler2")


// Referencia: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

function opacityUp(t){

}

function doSomething(scroll_pos) {
    if(last_known_scroll_position>=60){
        toggler.classList.remove("fade")

    } else  if(last_known_scroll_position<60){
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
for (link in navlinks){
    //console.log(link)   
    navlinks[link].addEventListener("click", (e)=>{
        //console.log("hola")
        navlinks[link].classList.add("active")
    })
    console.log(navlinks[link]) 
}

//animación para abrir nav

body.addEventListener("click", ()=>{
    openNav()
})
let openNav = ()=>{
    document.querySelector(".navbar").style.height = "100px"
}