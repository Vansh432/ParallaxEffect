console.log('parallex website');
let star=document.getElementById('star');
let moon=document.getElementById('moon');
let mountains_behind=document.getElementById('mountains_behind');
let txt=document.getElementById('txt');
let btn=document.getElementById('btn');
let mountains_front=document.getElementById('mountains_front');
console.log(star);
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
   
    star.style.left=`${value}px`;
    moon.style.top=`${value+1.25}px`;
    mountains_behind.style.top=`${value*1}px`;
    txt.style.left=`${1200-value*4}px`;
    txt.style.top=`${300+value}px`;
    btn.style.top=`${450+value}px`;
})