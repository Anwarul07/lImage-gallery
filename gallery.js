console.log("Image  gallery");
let scrol = document.querySelector(".gallery");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
scrol.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrol.style.scrollBehavior= "smooth";
    scrol.scrollLeft += e.deltaY;
}); 
left.addEventListener("click", ()=>{
    scrol.style.scrollBehavior= "smooth";
    scrol.scrollLeft+=900;
});

right.addEventListener("click", ()=>{
    scrol.style.scrollBehavior= "smooth";
    scrol.scrollLeft-=900;
});