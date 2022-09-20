"use strict"

const navItems = document.querySelector('#nav_items');
const openNavbtn = document.querySelector('#open_b');
const closeNavbtn = document.querySelector('#close_b');


openNavbtn.addEventListener('click', () =>{
    navItems.style.display = 'flex';
    openNavbtn.style.display = 'none';
    closeNavbtn.style.display = 'inline-block';
})

const closeNav = () =>{
    navItems.style.display = 'none';
    openNavbtn.style.display = 'inline-block';
    closeNavbtn.style.display = 'none';
}
closeNavbtn.addEventListener('click', closeNav);
