/* project 부분 가로 슬라이드 구현 */

document.querySelector('.slide-btn1').addEventListener('click', () => {
    document.querySelector('.timeline-slide').style.transform = 'translateX(0)';
})
document.querySelector('.slide-btn2').addEventListener('click', () => {
    document.querySelector('.timeline-slide').style.transform = 'translateX(-100vw)';
})
document.querySelector('.slide-btn3').addEventListener('click', () => {
    document.querySelector('.timeline-slide').style.transform = 'translateX(-200vw)';
})
document.querySelector('.slide-btn4').addEventListener('click', () => {
    document.querySelector('.timeline-slide').style.transform = 'translateX(-300vw)';
})
document.querySelector('.slide-btn5').addEventListener('click', () => {
    document.querySelector('.timeline-slide').style.transform = 'translateX(-400vw)';
})
document.querySelector('.slide-btn6').addEventListener('click', () => {
    document.querySelector('.timeline-slide').style.transform = 'translateX(-500vw)';
})
document.querySelector('.slide-btn7').addEventListener('click', () => {
    document.querySelector('.timeline-slide').style.transform = 'translateX(-600vw)';
})

/* menu 클릭 시 font color 변경 */

let currentNav;
let nav = document.querySelectorAll('.gnb-item');

function clickNavHandler() {
    if (currentNav) {
        currentNav.classList.remove('active');
    }
    this.classList.add('active');
    currentNav = this;
}

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', clickNavHandler);
}