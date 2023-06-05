let nav_header=document.querySelector(".header")
let mobile_nav=document.querySelector(".moble-nav-btn")
let toggle=()=>{
nav_header.classList.toggle("active")
};
mobile_nav.addEventListener('click',()=>toggle());