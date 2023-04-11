const hamburger = document.getElementById('hamburger');
const divMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener( 'click', () => {

    divMenu.classList.toggle('invisible');

})


window.addEventListener('resize', () => {

    const windowWidth = window.innerWidth;

    if(windowWidth >= 950 && !divMenu.classList.contains('invisible') ) {
       divMenu.classList.toggle('invisible');
    }
} )
