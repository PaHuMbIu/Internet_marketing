const containerBurgerCourseEl = document.querySelector('.container-burger-course');
const courseHeaderEls = document.querySelectorAll('.course-header');
const burgerMenuModulesEl = document.querySelector('.container-burger-course > img');

containerBurgerCourseEl.addEventListener('click', () => {

    courseHeaderEls.forEach(el => {
        el.classList.toggle('hidden-course-header');
    });

    containerBurgerCourseEl.classList.toggle('lower-part-container-burger-course');
    containerBurgerCourseEl.classList.toggle('collapse-container-burger-course');
    burgerMenuModulesEl.classList.toggle('hidden-burger-menu-modules');

});