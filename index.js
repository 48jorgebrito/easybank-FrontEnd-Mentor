const btnMobile = document.querySelector(".btn-mobile")
const navHeader = document.querySelector(".nav-header")

btnMobile.addEventListener("click", function(){
    navHeader.classList.toggle("nav-header-active")
    if(navHeader.classList.contains("nav-header-active")){
        btnMobile.src = "images/icon-close.svg"
    }else if(!navHeader.classList.contains("nav-header-active")){
        btnMobile.src = "images/icon-hamburger.svg"
    }
})