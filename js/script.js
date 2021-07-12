// $(function(){
//     $(".toggle").click(function(){
//         $("nav").stop().slideToggle();
//     });
// });
// jQuery 구현

const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", function(){
    // console.log("toggle");
    nav.classList.toggle("on");
});
// 바닐라js 구현