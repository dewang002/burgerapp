const openmenu = document.querySelector("#openmenu")
const closemenu = document.querySelector("#closemenu")
const menuoptions = document.querySelector("#menu")
var show=0;
openmenu.addEventListener("click",()=>{
    menuoptions.classList.remove("hidden")
})
closemenu.addEventListener("mousedown",()=>{
    menuoptions.classList.add("hidden")
})