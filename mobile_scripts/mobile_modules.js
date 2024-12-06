const containerBurgerCourseEl = document.querySelector('.container-burger-course');
const courseHeaderEls = document.querySelectorAll('.course-header');

containerBurgerCourseEl.addEventListener('click', () => {

    courseHeaderEls.forEach(el => {
        el.classList.toggle('hidden-course-header');
    });

    containerBurgerCourseEl.classList.toggle('lower-part-container-burger-course');

});