const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
function user() {
    content1.style.opacity = "1";
    content2.style.opacity = "0";
    content3.style.opacity = "0";
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
}
function Prodects() {
    content1.style.opacity = "0";
    content2.style.opacity = "1";
    content3.style.opacity = "0";
    btn2.classList.add('active');
    btn1.classList.remove('active');
    btn3.classList.remove('active');
}
function Notice() {
    content1.style.opacity = "0";
    content2.style.opacity = "0";
    content3.style.opacity = "1";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
}