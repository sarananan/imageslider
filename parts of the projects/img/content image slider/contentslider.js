let currentIndex=0;
let slides=document.querySelectorAll(".slide");
let slideslength=slides.length;
function prev(){
    currentIndex=(currentIndex+1) % slideslength;
    alert(currentIndex);
    // updateSlidePosition()
}
function rev(){
    currentIndex=(currentIndex-1) % slideslength;
    alert(currentIndex);
    // updateSlidePosition()
}
function updateSlidePosition(){
 let a =document.querySelector("slider1");
 a.style.marginLeft="100px";
}
