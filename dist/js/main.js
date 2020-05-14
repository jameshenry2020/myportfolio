const menuBtn = document.querySelector('.menu_btn');
const hamburger =document.querySelector('.menu_btn_burger');
const nav = document.querySelector('.nav');
const MenuNav = document.querySelector('.menu_nav');
const NavItem = document.querySelectorAll('.menu_nav_item');
let showBtn =false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showBtn){
        hamburger.classList.add('open');
        nav.classList.add('open');
        MenuNav.classList.add('open');
        NavItem.forEach(item =>item.classList.add('open'));
        showBtn= true
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        MenuNav.classList.remove('open');
        NavItem.forEach(item =>item.classList.remove('open'));
        showBtn =false;
    }
}