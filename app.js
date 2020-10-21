const navSlide = () => {
    const menu = document.querySelector('.navbar__menu');
    const nav = document.querySelector('.navbar__links');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    })

}

navSlide();