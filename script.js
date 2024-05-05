var toggleMenu = document.querySelector('.js-menu');
var display = 0;

function hideShow(){
    if (display == 1){
        toggleMenu.display ='block';
        display = 0;
    }
    else 
    {
        toggleMenu.style.display = 'none'
        display=1;
    }
}

toggleMenu.addEventListener('click', hideShow);

console.log(toggleMenu);