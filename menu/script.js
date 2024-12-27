let container=document.querySelector(".container");
let div1=document.querySelector(".div1");
let div2=document.querySelector(".div2");
let div3=document.querySelector(".div3");

container.addEventListener("click",()=>{
div1.classList.add("div1-hidden");
div2.classList.add("div2-hidden");
div3.classList.add("div3-hidden");
});