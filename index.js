var menuBtn = document.getElementById("menu")
var navLinks = document.getElementById("navLinks")
var closeMenu = document.getElementById("closeMenu")
var copy = document.getElementById("copy")

menuBtn.addEventListener("click", ()=>{
    navLinks.style.display ="flex"
})

closeMenu.addEventListener("click", ()=>{
    navLinks.style.display="none"
})

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText("moyo");
})