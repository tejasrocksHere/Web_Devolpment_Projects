
console.log("123");

let taskbar=document.getElementsByClassName("taskbar")[0];
let startmenu=document.getElementsByClassName("startMenu")[0];

taskbar.addEventListener('click',()=>{
    console.log("456")

    if (startmenu.style.bottom=="-120px") {
    startmenu.style.bottom="-750px"
}
else{
    startmenu.style.bottom="-120px"

}



})