/* introduce 클릭 시 content-box 내용 보이기 */

let introBtn = document.querySelector('.introduce-content-btn');
let introBox = document.querySelector('.introduce-content-box');

introBtn.addEventListener("click", () => {
    introBox.classList.toggle('on');
});