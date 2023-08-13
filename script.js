const header =  document.querySelector("header");

Window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky",Window.scrollY>200)
});
Let menu = document.querySelector('#menu-icon');
Let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}