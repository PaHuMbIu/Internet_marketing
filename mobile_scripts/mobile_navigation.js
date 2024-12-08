const burgerMenuEl = document.querySelector('.burger-menu-close');
const containerPanelNavigationEl = document.querySelector('.container-panel-navigation');

burgerMenuEl.addEventListener('click', () => {

    if (burgerMenuEl.classList.contains('burger-menu-close')) {

        burgerMenuEl.classList.remove('burger-menu-close');
        burgerMenuEl.classList.add('burger-menu-open');

    } else {

        burgerMenuEl.classList.add('burger-menu-close');
        burgerMenuEl.classList.remove('burger-menu-open');
    }

    containerPanelNavigationEl.classList.toggle('hidden-panel-navigation');
    if (!containerPanelNavigationEl.classList.contains('hidden-panel-navigation')) {
        document.body.style.overflow = 'hidden';

    } else {
        document.body.style.overflow = '';
    }

});
