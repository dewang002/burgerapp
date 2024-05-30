const openmenu = document.querySelector("#openmenu");
const closemenu = document.querySelector("#closemenu");
const menuoptions = document.querySelector("#menu");
var show = 0;
openmenu.addEventListener("click", () => {
  menuoptions.classList.remove("hidden");
});
closemenu.addEventListener("mousedown", () => {
  menuoptions.classList.add("hidden");
});
const category = document.querySelectorAll(".category button");
const all = document.querySelectorAll(".showall")
const snak = document.querySelectorAll(".snak")
const food = document.querySelectorAll(".food")
const beverages = document.querySelectorAll(".beverages")
category.forEach((elem) => {
  elem.addEventListener("click", () => {
    category.forEach((elem) => {
      elem.classList.remove("active");
    });
    elem.classList.add("active");
    const tabval=elem.getAttribute("data")
    all.forEach((elem)=>{
      elem.style.display="none"
    })

   if(tabval=="food"){
    food.forEach(elem=>elem.style.display="block")}
   else if(tabval=="snaks"){
    snak.forEach(elem=>elem.style.display="block")}
   else if(tabval=="beverage"){
    beverages.forEach(elem=>elem.style.display="block")}
    else{
        all.forEach((elem)=>{
            elem.style.display="block"
          })
    }
    


  });

});
