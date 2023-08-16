var menuBtn=document.querySelector('.logo');
var nav=document.querySelector('.nav-bar');
var wel=document.querySelector('.welcome-message');
menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('show-nav-bar');
    wel.classList.toggle('welcome-message-slide');
    document.querySelector('.reactions').classList.toggle('reactions-toggle');
    //document.querySelector('.targets').classList.toggle('targets-toggle');
});